"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { uploadImage } from "@/lib/uploadImage";
import { deleteFromSupabaseAndSanity } from "@/lib/sanitySync";


// ------------------ Types ------------------
type Message = { id: number; name: string; email: string; message: string; created_at: string };
type Blog = { id: number; title: string; description: string; details: string; image_url: string; created_at: string };
type Project = { id: number; title: string; link: string; image_url: string; created_at: string ;src: string;};

const DashboardPage = () => {
  const [auth, setAuth] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [activeTab, setActiveTab] = useState<"messages" | "blogs" | "projects">("messages");
  const [messages, setMessages] = useState<Message[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // Blog add states
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [blogDetails, setBlogDetails] = useState("");
  const [blogFile, setBlogFile] = useState<File | null>(null);

  // Project add states
  const [projTitle, setProjTitle] = useState("");
  const [projLink, setProjLink] = useState("");
  const [projFile, setProjFile] = useState<File | null>(null);

  // Modal states
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [modalDetailsFile, setModalDetailsFile] = useState<File | null>(null);
  const [modalLink, setModalLink] = useState("");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASS;

  // ------------------ Login ------------------
  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) setAuth(true);
    else alert("❌ Wrong password");
  };

  // ------------------ Fetch Data ------------------
  const fetchMessages = async () => {
    const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    if (!error) setMessages(data || []);
  };

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    if (!error) setBlogs(data || []);
  };

  const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (!error) setProjects(data || []);
};


  // ------------------ Delete ------------------


const deleteProject = async (id: number) => {
  await deleteFromSupabaseAndSanity("project", id);
  setProjects(projects.filter((p) => p.id !== id));
};

const deleteBlog = async (id: number) => {
  await deleteFromSupabaseAndSanity("blog", id);
  setBlogs(blogs.filter((b) => b.id !== id));
};

const deleteMessage = async (id: number) => {
  await deleteFromSupabaseAndSanity("contact", id);
  setMessages(messages.filter((m) => m.id !== id));
};




  // const deleteBlog = async (id: number) => {
  //   const { error } = await supabase.from("blogs").delete().eq("id", id);
  //   if (!error) {
  //     setBlogs(blogs.filter((b) => b.id !== id));
  //     await fetch("/api/sanitySync/deleteRoute", { method: "POST", body: JSON.stringify({ type: "blog", id }) });
  //   }
  // };

  // const deleteProject = async (id: number) => {
  //   const { error } = await supabase.from("projects").delete().eq("id", id);
  //   if (!error) {
  //     setProjects(projects.filter((p) => p.id !== id));
  //     await fetch("/api/sanitySync/deleteRoute", { method: "POST", body: JSON.stringify({ type: "project", id }) });
  //   }
  // };

  // const deleteMessage = async (id: number) => {
  //   const { error } = await supabase.from("contacts").delete().eq("id", id);
  //   if (!error) setMessages(messages.filter((msg) => msg.id !== id));
  // };

  // ------------------ Modal open ------------------
  const openBlogModal = (blog: Blog) => {
    setEditingBlog(blog);
    setEditingProject(null);
    setModalTitle(blog.title);
    setModalDesc(blog.description);
    setModalDetailsFile(null);
    setModalOpen(true);
  };

  const openProjectModal = (project: Project) => {
    setEditingProject(project);
    setEditingBlog(null);
    setModalTitle(project.title);
    setModalLink(project.link);
    setModalDetailsFile(null);
    setModalOpen(true);
  };

  // ------------------ Save Updates ------------------
  const saveUpdate = async () => {
    if (editingBlog) {
      let imageUrl = editingBlog.image_url;
      if (modalDetailsFile) {
        const uploaded = await uploadImage(modalDetailsFile, "blogs");
        if (!uploaded) return alert("Image upload failed");
        imageUrl = uploaded;
      }

      const { error, data } = await supabase
        .from("blogs")
        .update({ title: modalTitle, description: modalDesc, image_url: imageUrl })
        .eq("id", editingBlog.id)
        .select();

      if (!error && data) {
        const updatedBlog = data[0];
        setBlogs(blogs.map(b => (b.id === editingBlog.id ? updatedBlog : b)));
        await fetch("/api/sanitySync", { method: "POST", body: JSON.stringify({ type: "blog", data: updatedBlog }) });
      }
    }

    if (editingProject) {
      let imageUrl = editingProject.image_url;
      if (modalDetailsFile) {
        const uploaded = await uploadImage(modalDetailsFile, "projects");
        if (!uploaded) return alert("Image upload failed");
        imageUrl = uploaded;
      }

      const { error, data } = await supabase
        .from("projects")
        .update({ title: modalTitle, link: modalLink, image_url: imageUrl })
        .eq("id", editingProject.id)
        .select();

      if (!error && data) {
        const updatedProject = data[0];
        setProjects(projects.map(p => (p.id === editingProject.id ? updatedProject : p)));
        await fetch("/api/sanitySync", { method: "POST", body: JSON.stringify({ type: "project", data: updatedProject }) });
      }
    }

    setModalOpen(false);
    setEditingBlog(null);
    setEditingProject(null);
  };

  // ------------------ Add Blog ------------------
  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogFile) return alert("Please select an image");

    const imageUrl = await uploadImage(blogFile, "blogs");
    if (!imageUrl) return alert("Image upload failed");

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ title: blogTitle, description: blogDesc, details: blogDetails, image_url: imageUrl }])
      .select();

    if (!error && data) {
      const newBlog = data[0];
      setBlogs([newBlog, ...blogs]);
      await fetch("/api/sanitySync", { method: "POST", body: JSON.stringify({ type: "blog", data: newBlog }) });
      setBlogTitle(""); setBlogDesc(""); setBlogDetails(""); setBlogFile(null);
    }
  };

  // ------------------ Add Project ------------------
  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projFile) return alert("Please select an image");

    const imageUrl = await uploadImage(projFile, "projects");
    if (!imageUrl) return alert("Image upload failed");

    const { data, error } = await supabase
      .from("projects")
      .insert([{ title: projTitle, link: projLink, image_url: imageUrl }])
      .select();

    if (!error && data) {
      const newProject = data[0];
      setProjects([newProject, ...projects]);
      await fetch("/api/sanitySync", { method: "POST", body: JSON.stringify({ type: "project", data: newProject }) });
      setProjTitle(""); setProjLink(""); setProjFile(null);
    }
  };

  // ------------------ On Mount ------------------
  useEffect(() => {
    if (auth) { fetchMessages(); fetchBlogs(); fetchProjects(); }
  }, [auth]);

  // ------------------ Login UI ------------------
  if (!auth) return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 bg-[#111] rounded-xl border border-gray-700 shadow-xl relative z-50">
        <h2 className="text-2xl mb-4">🔒 Admin Login</h2>
        <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Enter password" className="px-4 py-2 rounded-lg bg-[#0f0f1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
        <button onClick={handleLogin} className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white hover:opacity-90 transition">Login</button>
      </div>
    </div>
  );

  // ------------------ Dashboard UI ------------------
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">⚡ Admin Dashboard</h1>
        <Link href="/" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white shadow hover:opacity-90 relative z-50">🏠 Home</Link>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 relative z-50">
        {["messages", "blogs", "projects"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === tab ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
        ))}
      </div>

      {/* ------------------ Content ------------------ */}
      <div className="space-y-6">
        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="grid md:grid-cols-2 gap-4">
            {messages.length ? messages.map((msg) => (
              <div key={msg.id} className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold">{msg.name} ({msg.email})</h3>
                <p className="mt-1 text-gray-300">{msg.message}</p>
                <div className="mt-2 flex justify-end space-x-2">
                  <button onClick={() => deleteMessage(msg.id)} className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition">Delete</button>
                </div>
              </div>
            )) : <p>No messages yet.</p>}
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === "blogs" && (
          <div>
            {/* Add Blog Form */}
            <form onSubmit={handleAddBlog} className="mb-4 p-4 relative z-50 bg-gray-900 rounded-lg space-y-2">
              <input type="text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)} placeholder="Blog Title" className="w-full p-2 rounded border text-black" />
              <input type="text" value={blogDesc} onChange={e => setBlogDesc(e.target.value)} placeholder="Description" className="w-full p-2 rounded border text-black" />
              <input type="text" value={blogDetails} onChange={e => setBlogDetails(e.target.value)} placeholder="Details" className="w-full p-2 rounded border text-black" />
              <input type="file" accept="image/*" onChange={e => setBlogFile(e.target.files?.[0] || null)} className="w-full" />
              <button type="submit" className="px-4 py-2 bg-purple-600 rounded text-white hover:opacity-80 relative z-50">Add Blog</button>
            </form>

            {/* Blog Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {blogs.length ? blogs.map((blog) => (
                <div key={blog.id} className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                  {blog.image_url && <img src={blog.image_url} alt={blog.title} className="w-full h-48 object-cover rounded mb-2" />}
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                  <p className="text-gray-300">{blog.description}</p>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button onClick={() => openBlogModal(blog)} className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition">Edit</button>
                    <button onClick={() => deleteBlog(blog.id)} className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition">Delete</button>
                  </div>
                </div>
              )) : <p>No blogs yet.</p>}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div>
            {/* Add Project Form */}
            <form onSubmit={handleAddProject} className="mb-4 p-4 relative z-50 bg-gray-900 rounded-lg space-y-2">
              <input type="text" value={projTitle} onChange={e => setProjTitle(e.target.value)} placeholder="Project Title" className="w-full p-2 rounded border text-black" />
              <input type="text" value={projLink} onChange={e => setProjLink(e.target.value)} placeholder="Project Link" className="w-full p-2 rounded border text-black" />
              <input type="file" accept="image/*" onChange={e => setProjFile(e.target.files?.[0] || null)} className="w-full" />
              <button type="submit" className="px-4 py-2 bg-purple-600 rounded text-white hover:opacity-80 relative z-50">Add Project</button>
            </form>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {projects.length ? projects.map((proj) => (
                <div key={proj.id} className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                  {proj.image_url && <img src={proj.image_url} alt={proj.title} className="w-full h-48 object-cover rounded mb-2" />}
                  <h3 className="font-semibold text-lg">{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{proj.link}</a>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button onClick={() => openProjectModal(proj)} className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition">Edit</button>
                    <button onClick={() => deleteProject(proj.id)} className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white shadow relative z-50 hover:opacity-90 transition">Delete</button>
                  </div>
                </div>
              )) : <p>No projects yet.</p>}
            </div>
          </div>
        )}
      </div>

      {/* ------------------ Modal ------------------ */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#111] p-6 rounded-xl w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4">{editingBlog ? "Edit Blog" : "Edit Project"}</h2>
            <input type="text" value={modalTitle} onChange={e => setModalTitle(e.target.value)} className="w-full p-2 mb-2 text-black rounded border" placeholder="Title" />
            {editingBlog && <input type="text" value={modalDesc} onChange={e => setModalDesc(e.target.value)} className="w-full p-2 mb-2 text-black rounded border" placeholder="Description" />}
            {editingProject && <input type="text" value={modalLink} onChange={e => setModalLink(e.target.value)} className="w-full p-2 mb-2 text-black rounded border" placeholder="Project Link" />}
            <input type="file" accept="image/*" onChange={e => setModalDetailsFile(e.target.files?.[0] || null)} className="mb-4" />
            <div className="flex justify-end space-x-2">
              <button onClick={() => { setModalOpen(false); setEditingBlog(null); setEditingProject(null); }} className="px-4 py-2 bg-gray-600 rounded text-white hover:opacity-80">Cancel</button>
              <button onClick={saveUpdate} className="px-4 py-2 bg-purple-600 rounded text-white hover:opacity-80">Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardPage;


