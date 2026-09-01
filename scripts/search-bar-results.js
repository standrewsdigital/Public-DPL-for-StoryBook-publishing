let courses = [] // Store courses

// Fetch courses from JSON
async function loadCourses () {
  try {
    const response = await fetch('./courses.json')
    if (!response.ok) throw new Error(`HTTP error! Status: ${ response.status }`)
    courses = await response.json()
  } catch (error) {
    console.error('Error loading JSON:', error)
  }
}

// Shared function to filter courses
function filterCourses (searchId, format) {
  const query = document.getElementById(searchId).value.toLowerCase().trim()
  const isListFormat = format === 'list'

  // Select appropriate elements based on format
  const elements = isListFormat ? {
    undergradContainer: document.getElementById('undergraduate-courses-list'),
    postgradContainer: document.getElementById('postgraduate-courses-list'),
    resultsContainer: document.getElementById('results-container-list'),
    undergradTitle: document.getElementById('undergrad-title-list'),
    postgradTitle: document.getElementById('postgrad-title-list')
  } : {
    undergradContainer: document.getElementById('undergraduate-courses-buttons'),
    postgradContainer: document.getElementById('postgraduate-courses-buttons'),
    resultsContainer: document.getElementById('results-container-buttons'),
    undergradTitle: document.getElementById('undergrad-title-buttons'),
    postgradTitle: document.getElementById('postgrad-title-buttons')
  }

  if (query === '' || courses.length === 0) {
    elements.resultsContainer.style.display = 'none'
    return
  }

  // Filter courses based on query
  const filteredCourses = courses.filter(course => course.subject_name.toLowerCase().includes(query))

  // Separate UG & PG courses
  const undergradCourses = filteredCourses.filter(course => course.study_level.toLowerCase() === 'undergraduate')
  const postgradCourses = filteredCourses.filter(course => course.study_level.toLowerCase().includes('postgraduate'))

  // Render based on format
  const undergradIsEmpty = isListFormat
    ? renderCourseList(undergradCourses, elements.undergradContainer)
    : renderCourseButtons(undergradCourses, elements.undergradContainer)

  const postgradIsEmpty = isListFormat
    ? renderCourseList(postgradCourses, elements.postgradContainer)
    : renderCourseButtons(postgradCourses, elements.postgradContainer)

  // Show/hide titles & results
  elements.undergradTitle.style.display = undergradIsEmpty ? 'none' : 'block'
  elements.postgradTitle.style.display = postgradIsEmpty ? 'none' : 'block'
  elements.resultsContainer.style.display = undergradIsEmpty && postgradIsEmpty ? 'none' : 'block'
}

// Create course list items
function renderCourseList (courses, container) {
  if (courses.length === 0) {
    container.innerHTML = `<li class="no-courses">No courses available.</li>`
    return true
  }

  container.innerHTML = courses.map(course =>
    `<li><a href="${ course.path }" class="course-link">${ course.subject_name } (${ course.suffix || 'N/A' })</a></li>`
  ).join('')

  return false
}

// Create course buttons
function renderCourseButtons (courses, container) {
  if (courses.length === 0) {
    container.innerHTML = `<p class="no-courses">No courses available.</p>`
    return true
  }

  container.innerHTML = courses.map(course =>
    `<button class="btn course-button" onclick="window.location.href='${ course.path }'">
            ${ course.subject_name } (${ course.suffix || 'N/A' })
        </button>`
  ).join('')

  return false
}

// Initialize after loading courses
document.addEventListener('DOMContentLoaded', async function () {
  await loadCourses()
  document.getElementById('search-list').addEventListener('input', () => filterCourses('search-list', 'list'))
  document.getElementById('search-buttons').addEventListener('input', () => filterCourses('search-buttons', 'buttons'))
})

function updatePlaceholders () {
  const searchInputs = document.querySelectorAll('input.search-box')

  searchInputs.forEach(input => {
    input.placeholder = window.innerWidth <= 700 ? 'Search..' : 'Search the University website'
  })
}

// Run on page load
updatePlaceholders()

// Listen for window resize
window.addEventListener('resize', updatePlaceholders)
