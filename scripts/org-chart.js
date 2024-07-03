// org-chart.js

const orgData = [
    {
        name: "Emily White",
        role: "CFO",
        description: "Chief Financial Officer",
        imgSrc: "../assets/female-1.jpg",
        children: [
            {
                name: "John Doe",
                role: "Manager",
                description: "Manager of Sales Department",
                imgSrc: "../assets/male-2.jpg",
                children: [
                    {
                        name: "Jane Smith",
                        role: "Team Lead",
                        description: "Lead of Sales Team A",
                        imgSrc: "../assets/female-2.jpg",
                        children: [
                            {
                                name: "Jake Turner",
                                role: "Senior Developer",
                                description: "Senior Developer in Sales Team A",
                                imgSrc: "../assets/male-1.jpg",
                                children: []
                            },
                            {
                                name: "Laura Collins",
                                role: "Junior Developer",
                                description: "Junior Developer in Sales Team A",
                                imgSrc: "../assets/female-3.jpg",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Peter Parker",
                        role: "Team Lead",
                        description: "Lead of Sales Team B",
                        imgSrc: "../assets/male-3.jpg",
                        children: [
                            {
                                name: "Bruce Wayne",
                                role: "Senior Developer",
                                description: "Senior Developer in Sales Team B",
                                imgSrc: "../assets/male-4.jpg",
                                children: []
                            },
                            {
                                name: "Clark Kent",
                                role: "Junior Developer",
                                description: "Junior Developer in Sales Team B",
                                imgSrc: "../assets/male-5.jpg",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Alice Johnson",
                role: "Manager",
                description: "Manager of Marketing Department",
                imgSrc: "../assets/female-4.jpg",
                children: [
                    {
                        name: "Samuel Green",
                        role: "Team Lead",
                        description: "Lead of Marketing Team A",
                        imgSrc: "../assets/male-6.jpg",
                        children: [
                            {
                                name: "Nancy Drew",
                                role: "Senior Marketing Specialist",
                                description: "Senior Marketing Specialist in Marketing Team A",
                                imgSrc: "../assets/female-5.jpg",
                                children: []
                            },
                            {
                                name: "Harry Potter",
                                role: "Junior Marketing Specialist",
                                description: "Junior Marketing Specialist in Marketing Team A",
                                imgSrc: "../assets/male-7.jpg",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Lisa Simpson",
                        role: "Team Lead",
                        description: "Lead of Marketing Team B",
                        imgSrc: "../assets/female-6.jpg",
                        children: [
                            {
                                name: "Bart Simpson",
                                role: "Senior Marketing Specialist",
                                description: "Senior Marketing Specialist in Marketing Team B",
                                imgSrc: "../assets/male-8.jpg",
                                children: []
                            },
                            {
                                name: "Marge Simpson",
                                role: "Junior Marketing Specialist",
                                description: "Junior Marketing Specialist in Marketing Team B",
                                imgSrc: "../assets/female-7.jpg",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "David Brown",
        role: "CTO",
        description: "Chief Technology Officer",
        imgSrc: "../assets/male-9.jpg",
        children: [
            {
                name: "Eve Davis",
                role: "Manager",
                description: "Manager of IT Department",
                imgSrc: "../assets/female-8.jpg",
                children: [
                    {
                        name: "Frank Miller",
                        role: "Team Lead",
                        description: "Lead of IT Support Team",
                        imgSrc: "../assets/male-10.jpg",
                        children: [
                            {
                                name: "Gabriel Smith",
                                role: "Senior IT Support",
                                description: "Senior IT Support in IT Support Team",
                                imgSrc: "../assets/male-11.jpg",
                                children: []
                            },
                            {
                                name: "Hannah Williams",
                                role: "Junior IT Support",
                                description: "Junior IT Support in IT Support Team",
                                imgSrc: "../assets/female-9.jpg",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Isabella Taylor",
                        role: "Team Lead",
                        description: "Lead of Development Team",
                        imgSrc: "../assets/female-10.jpg",
                        children: [
                            {
                                name: "Jack Wilson",
                                role: "Senior Developer",
                                description: "Senior Developer in Development Team",
                                imgSrc: "../assets/male-12.jpg",
                                children: []
                            },
                            {
                                name: "Karen Martinez",
                                role: "Junior Developer",
                                description: "Junior Developer in Development Team",
                                imgSrc: "../assets/female-11.jpg",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Michael Clark",
                role: "Manager",
                description: "Manager of Network Department",
                imgSrc: "../assets/male-13.jpg",
                children: [
                    {
                        name: "Nina Lewis",
                        role: "Team Lead",
                        description: "Lead of Network Team A",
                        imgSrc: "../assets/female-12.jpg",
                        children: [
                            {
                                name: "Oliver Scott",
                                role: "Senior Network Engineer",
                                description: "Senior Network Engineer in Network Team A",
                                imgSrc: "../assets/male-14.jpg",
                                children: []
                            },
                            {
                                name: "Pamela Walker",
                                role: "Junior Network Engineer",
                                description: "Junior Network Engineer in Network Team A",
                                imgSrc: "../assets/female-13.jpg",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "Quincy Hall",
                        role: "Team Lead",
                        description: "Lead of Network Team B",
                        imgSrc: "../assets/male-15.jpg",
                        children: [
                            {
                                name: "Rachel Adams",
                                role: "Senior Network Engineer",
                                description: "Senior Network Engineer in Network Team B",
                                imgSrc: "../assets/female-14.jpg",
                                children: []
                            },
                            {
                                name: "Steve Harris",
                                role: "Junior Network Engineer",
                                description: "Junior Network Engineer in Network Team B",
                                imgSrc: "../assets/male-16.jpg",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function createPersonRow(person, generation) {
    const row = document.createElement('div');
    row.classList.add('row', `generation-${generation}`);

    const col1 = document.createElement('div');
    col1.classList.add('col', 'col-6-xxs', 'col-4-xs', 'col-4-sm', 'col-2-md', 'col-2-lg', 'org-image-container');
    col1.innerHTML = `<img class="org-image" src="${person.imgSrc}" onclick="openModal('${person.name}', '${person.role}', '${person.description}')" />`;

    const col2 = document.createElement('div');
    col2.classList.add('col', 'col-4-xxs', 'col-6-xs', 'col-6-sm', 'col-9-md', 'col-9-lg', 'org-info');
    col2.innerHTML = `<h2>${person.name}</h2><p>${person.role}</p>`;

    const col3 = document.createElement('div');
    col3.classList.add('col', 'col-2-xxs', 'col-2-xs', 'col-2-sm', 'col-1-md', 'col-1-lg', 'chevron-container');

    if (person.children && person.children.length > 0) {
        col3.innerHTML = `<a><span class="material-icons-outlined toggle-children chevron-icon" onclick="toggleChildren(this)">keyboard_arrow_down</span></a>`;
    } else {
        col3.innerHTML = ''; // Empty if no children
    }

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    if (person.children && person.children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.classList.add('container', 'children');
        childrenContainer.style.display = 'none';

        person.children.forEach(child => {
            childrenContainer.appendChild(createPersonRow(child, generation + 1));
        });

        row.appendChild(childrenContainer);
    }

    return row;
}

function openModal(name, role, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalRole').textContent = role;
    document.getElementById('modalDescription').textContent = description;
    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.close();
}

function toggleChildren(element) {
    const parentRow = element.closest('.row');
    const childrenContainer = parentRow.querySelector('.children');

    if (childrenContainer) {
        const isHidden = childrenContainer.style.display === 'none';
        childrenContainer.style.display = isHidden ? 'contents' : 'none';
        element.textContent = isHidden ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const orgChartContainer = document.getElementById('orgChart');
    const container = document.createElement('div');
    container.classList.add('container');
    orgData.forEach(person => {
        container.appendChild(createPersonRow(person, 1));
    });
    orgChartContainer.appendChild(container);
});
