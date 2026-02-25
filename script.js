const totalCountId = document.getElementById('total-count');
const interviewCountId = document.getElementById('interview-count');
const rejectedCountId = document.getElementById('rejected-count');
const jobsCountId = document.getElementById('jobs-count');
const cardListItems = document.getElementById('card-list');

let jobData = [
{
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "not_applied"
},
{  
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "not_applied"
},
{
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations.",
    status: "not_applied"
},
{
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS.",
    status: "not_applied"
},
{
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces.",
    status: "not_applied"
},
{
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications with JavaScript.",
    status: "not_applied"
},
{
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Work on core platform using Node.js and React.",
    status: "not_applied"
},
{
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build scalable web apps using React and TypeScript.",
    status: "not_applied"
},
];

// Render Jobs
function renderJobs(jobs) {
    cardListItems.innerHTML = "";

    jobs.forEach((job) => {
        const realIndex = jobData.indexOf(job);

        const div = document.createElement("div");
        div.className = "flex flex-col gap-4 p-5 bg-white shadow-sm rounded-lg";

        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-xl text-[#002C5C] font-semibold">${job.company}</h2>
                    <p>${job.position}</p>
                </div>
                <button onclick="deleteJob(${realIndex})">
                    🗑
                </button>
            </div>

            <ul class="flex gap-6 text-[#64748B]">
                <li>${job.location}</li>
                <li>${job.type}</li>
                <li>${job.salary}</li>
            </ul>

            <p class="${
                job.status === "interview"
                ? "text-green-600"
                : job.status === "rejected"
                ? "text-red-600"
                : "text-gray-500"
            } font-semibold">
                ${
                    job.status === "interview"
                    ? "Interview"
                    : job.status === "rejected"
                    ? "Rejected"
                    : "Not Applied"
                }
            </p>

            <p>${job.description}</p>

            <div class="flex gap-3">
                <button onclick="markInterview(${realIndex})"
                    class="px-5 py-2 border border-green-500 text-green-500 rounded-md">
                    Interview
                </button>

                <button onclick="markRejected(${realIndex})"
                    class="px-5 py-2 border border-red-500 text-red-500 rounded-md">
                    Rejected
                </button>
            </div>
        `;

        cardListItems.appendChild(div);
    });

    updateCounts();
}

// Update Counts
function updateCounts() {
    const total = jobData.length;
    const interview = jobData.filter(job => job.status === "interview").length;
    const rejected = jobData.filter(job => job.status === "rejected").length;

    totalCountId.nextElementSibling.innerText = total;
    interviewCountId.nextElementSibling.innerText = interview;
    rejectedCountId.nextElementSibling.innerText = rejected;
    jobsCountId.innerText = total;
}

// Status Change
function markInterview(index) {
    jobData[index].status = "interview";
    renderJobs(jobData);
}

function markRejected(index) {
    jobData[index].status = "rejected";
    renderJobs(jobData);
}

function deleteJob(index) {
    jobData.splice(index, 1);
    renderJobs(jobData);
}

// Filter Buttons
const allBtn = document.getElementById("all");
const interviewBtn = document.getElementById("interview");
const rejectedBtn = document.getElementById("rejected");

allBtn.addEventListener("click", () => {
    renderJobs(jobData);
});

interviewBtn.addEventListener("click", () => {
    const filtered = jobData.filter(job => job.status === "interview");
    renderJobs(filtered);
});

rejectedBtn.addEventListener("click", () => {
    const filtered = jobData.filter(job => job.status === "rejected");
    renderJobs(filtered);
});

// Initial Render
renderJobs(jobData);