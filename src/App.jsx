import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Addjob from "./pages/Addjob.jsx";
import JobPage, { jobLoader } from "./pages/JobPage.jsx";
import EditJob from "./pages/EditJob.jsx";
// post new job
const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // delete job
  const deletejob = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/${id}`, {
      method: "DELETE",
    });
    return;
  };
  const updateJob = async (job) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<Addjob addJobSumbit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJob updatedjobclick={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deletejob} />}
          loader={jobLoader}
        />
      </Route>,
    ),
    {
      basename: import.meta.env.BASE_URL,
    },
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
