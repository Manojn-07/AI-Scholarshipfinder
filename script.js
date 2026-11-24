const scholarships = [
    {
        name: "Merit Scholarship",
        education: ["UG", "PG"],
        minMarks: 75,
        maxIncome: 500000,
        categories: ["General", "OBC", "SC", "ST", "EWS"]
    },
    {
        name: "Need Based Scholarship",
        education: ["PUC", "UG", "PG"],
        minMarks: 50,
        maxIncome: 250000,
        categories: ["General", "OBC", "SC", "ST", "EWS"]
    },
    {
        name: "SC/ST Education Support",
        education: ["PUC", "UG", "PG"],
        minMarks: 50,
        maxIncome: 300000,
        categories: ["SC", "ST"]
    },
    {
        name: "OBC Education Support",
        education: ["PUC", "UG", "PG"],
        minMarks: 60,
        maxIncome: 300000,
        categories: ["OBC"]
    }
];

document.getElementById("scholarshipForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const marks = Number(document.getElementById("marks").value);
    const income = Number(document.getElementById("income").value);
    const category = document.getElementById("category").value;

    if (marks < 0 || marks > 100 || income < 0) {
        alert("Please enter valid marks and income.");
        return;
    }

    const results = scholarships.filter(scholarship => {

        return scholarship.education.includes(education) &&
               marks >= scholarship.minMarks &&
               income <= scholarship.maxIncome &&
               scholarship.categories.includes(category);

    });

    const resultBox = document.getElementById("results");

    resultBox.innerHTML = "<h2>Scholarship Results</h2>";

    if (results.length === 0) {
        resultBox.innerHTML +=
            "<p>No matching scholarships found. Try checking other opportunities.</p>";
        return;
    }

    resultBox.innerHTML +=
        `<p>Hello ${name}! We found ${results.length} possible matches.</p>`;

    results.forEach(scholarship => {

        resultBox.innerHTML += `
            <div class="scholarship">
                <h3>${scholarship.name}</h3>
                <p>Minimum Marks: ${scholarship.minMarks}%</p>
                <p>Maximum Income: ₹${scholarship.maxIncome}</p>
                <p>Education: ${scholarship.education.join(", ")}</p>
                <p>Status: Potential Match</p>
            </div>
        `;

    });

});