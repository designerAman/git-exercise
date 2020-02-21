// login page Js
const userType = document.getElementsByName('userType');
const name = document.querySelector('.name');
const requiredName = document.querySelector('.requiredName');
const email = document.querySelector('.email');
const requiredEmail = document.querySelector('.requiredEmail');
const validEmail = document.querySelector('.validEmail');
const alreadyExist = document.querySelector('.alreadyExist');
const emailNotRegistered = document.querySelector('.emailNotRegistered');
const password = document.querySelector('.password');
const requiredPassword = document.querySelector('.requiredPassword');
const incorrectPassword = document.querySelector('.incorrectPassword');
const confirmPassword = document.querySelector('.confirmPassword');
const requiredConfirmPassword = document.querySelector('.requiredConfirmPassword');
const checkPassword = document.getElementsByClassName('checkPassword');
const togglePassword = document.getElementsByClassName('togglePassword');
const signUpBtn = document.querySelector('.signUpBtn');
const loginBtn = document.querySelector('.loginBtn');
const dashboardType = document.querySelector('.dashboardType');
const nameOnDashboard = document.querySelector('.nameOnDashboard');
const logout = document.querySelector('.logout');
const courseName = document.querySelector('.courseName');
const courseLink = document.querySelector('.courseLink');
const courseImage = document.querySelector('.courseImage');
const addCourseBtn = document.querySelector('.addCourseBtn');
const requiredCourseName = document.querySelector('.requiredCourseName');
const courseAlreadyExist = document.querySelector('.courseAlreadyExist');
const requiredCourseLink = document.querySelector('.requiredCourseLink');
const requiredCourseImage = document.querySelector('.requiredCourseImage');
const addCourseModal = document.querySelector('#addCourseModal');
const exampleModal = document.querySelector('#exampleModal');
const adminCourses = document.querySelector('.adminCourses');
const studentList = document.querySelector('.studentList');
const studentsForCourse = document.getElementsByName('studentsForCourse');
const asignBtn = document.querySelector('.asignBtn');
const studentCourses = document.querySelector('.studentCourses');

let currenturl = window.location.href.split('/');
let currentPage = currenturl[currenturl.length - 1];
let currentCourseId;

// const defaultUrl = 'http://127.0.0.1:5500/'

const checkRouteProtection = () => {
    const currentlyLoggedInUser = localStorage.getItem('currentlyLoggedInUser') ? JSON.parse(localStorage.getItem('currentlyLoggedInUser')) : [];

    if (currentlyLoggedInUser.length < 1) {
        return false;
    } else {
        if (currentPage === 'studentDashboard.html') {
            let count = 0;
            for (const user of currentlyLoggedInUser) {
                if (user.type === 'student') {
                    count++;
                }
            }
            if (count === 0) {
                return false
            } else {
                return true
            }
        } else if (currentPage === 'adminDashboard.html') {
            let count = 0;
            for (const user of currentlyLoggedInUser) {
                if (user.type === 'admin') {
                    count++;
                }
            }
            if (count === 0) {
                return false
            } else {
                return true
            }
        }
    }
}

const checkValidation = () => {

    let currenturl = window.location.href.split('/');
    let currentPage = currenturl[currenturl.length - 1];
    let validCount = 0;
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (currentPage === 'register.html') {
        if (!name.value) {
            requiredName.style.display = 'initial';
            validCount++;
        } else {
            requiredName.style.display = 'none';
        }
    }

    if (!email.value) {
        requiredEmail.style.display = 'initial';
        validCount++;
    } else {
        requiredEmail.style.display = 'none';
    }

    if (!testEmail.test(email.value) && email.value) {
        validEmail.style.display = 'initial';
        validCount++;
    } else {
        validEmail.style.display = 'none';
    }

    if (!password.value) {
        requiredPassword.style.display = 'initial';
        validCount++;
    } else {
        requiredPassword.style.display = 'none';
    }

    if (currentPage === 'register.html') {
        if (!confirmPassword.value) {
            requiredConfirmPassword.style.display = 'initial';
            validCount++;
        } else {
            requiredConfirmPassword.style.display = 'none';
        }
    }

    if (currentPage === 'register.html') {
        if (password.value !== confirmPassword.value && confirmPassword.value && password.value) {
            checkPassword[0].style.display = 'initial';
            checkPassword[1].style.display = 'initial';
            validCount++;
        } else {
            checkPassword[0].style.display = 'none';
            checkPassword[1].style.display = 'none';
        }
    }

    if (validCount > 0) {
        return false;
    } else {
        return true;
    }
}

const checkWhoYouAre = () => {
    console.log(userType);
    for (const check of userType) {
        if (check.checked) {
            if (check.value === 'student') {
                return 'student'
            } else {
                return 'admin'
            }
        }
    }

}

const findCurrentlyLoggedInUser = (whoYouAre, user) => {
    const currentlyLoggedInUser = localStorage.getItem('currentlyLoggedInUser') ? JSON.parse(localStorage.getItem('currentlyLoggedInUser')) : [];
    if (currentlyLoggedInUser.length > 0) {
        let count = 0;
        currentlyLoggedInUser.forEach(user => {
            if (user.type === whoYouAre) {
                console.log(6457635)
                count++;
            }
        });
        if (count == 0) {
            currentlyLoggedInUser.push(user);
        }
    } else {
        currentlyLoggedInUser.push(user);
    }

    localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedInUser));
}

const register = () => {

    if (checkValidation()) {
        let alreadyRegistered = false;

        requiredName.style.display = 'none';
        requiredEmail.style.display = 'none';
        validEmail.style.display = 'none';
        requiredPassword.style.display = 'none';
        requiredConfirmPassword.style.display = 'none';
        checkPassword[0].style.display = 'none';
        checkPassword[1].style.display = 'none';

        let whoYouAre = checkWhoYouAre();
        const userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];

        userArr.forEach(user => {
            if (user.email === email.value) {
                alreadyRegistered = true;
            }
        });

        if (!alreadyRegistered) {
            alreadyExist.style.display = 'none';
            let userObj = {
                name: name.value,
                email: email.value,
                password: password.value,
                courses: []
            }
            if (whoYouAre == 'student')
                userObj['type'] = 'student';
            else
                userObj['type'] = 'admin';

            console.log(userObj);
            userArr.push(userObj);
            localStorage.setItem('userArr', JSON.stringify(userArr));
            findCurrentlyLoggedInUser(whoYouAre, userObj);
            if (whoYouAre === 'student') {
                // window.location.href = `${defaultUrl}studentDashboard.html`
                window.location.href = `./studentDashboard.html`
            } else {
                // window.location.href = `${defaultUrl}adminDashboard.html`
                window.location.href = `./adminDashboard.html`
            }
            name.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';
        } else {
            alreadyExist.style.display = 'initial';
        }
    }
}

const login = () => {
    if (checkValidation()) {
        requiredEmail.style.display = 'none';
        validEmail.style.display = 'none';
        requiredPassword.style.display = 'none';

        let whoYouAre = checkWhoYouAre();
        const userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];

        if (userArr.length === 0) {
            emailNotRegistered.style.display = 'initial';
            return false;
        }

        userArr.forEach(user => {
            if (user.email === email.value) {
                emailNotRegistered.style.display = 'none';
                if (user.password == password.value) {
                    incorrectPassword.style.display = 'none';
                    findCurrentlyLoggedInUser(whoYouAre, user);
                    if (user.type === 'student') {
                        // window.location.href = `${defaultUrl}studentDashboard.html`
                        window.location.href = `./studentDashboard.html`
                    } else {
                        window.location.href = `./adminDashboard.html`
                        // window.location.href = `${defaultUrl}adminDashboard.html`
                    }
                } else {
                    incorrectPassword.style.display = 'initial';
                }
            }
        })
    }
}

const logoutFunction = () => {
    let whoYouAre;
    const currentlyLoggedInUser = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));

    if (currentPage === 'studentDashboard.html') {
        whoYouAre = 'student';
    } else if (currentPage === 'adminDashboard.html') {
        whoYouAre = 'admin';
    }

    currentlyLoggedInUser.forEach((user, i) => {
        if (user.type === whoYouAre) {
            currentlyLoggedInUser.splice(i, 1);
            localStorage.setItem('currentlyLoggedInUser', JSON.stringify(currentlyLoggedInUser));
            window.location.href = `./login.html`;
            // window.location.href = `${defaultUrl}login.html`;
        }
    });
}

const checkCourseValidation = () => {
    let validCount = 0;
    if (!courseName.value) {
        requiredCourseName.style.display = 'initial';
        validCount++;
    } else {
        requiredCourseName.style.display = 'none';
    }

    if (!courseLink.value) {
        requiredCourseLink.style.display = 'initial';
        validCount++;
    } else {
        requiredCourseLink.style.display = 'none';
    }

    if (!courseImage.value) {
        requiredCourseImage.style.display = 'initial';
        validCount++;
    } else {
        requiredCourseImage.style.display = 'none';
    }

    if (validCount > 0) {
        return false;
    } else {
        return true;
    }
}

const showCoursesToAdmin = () => {
    adminCourses.innerHTML = ``
    const courseArr = JSON.parse(localStorage.getItem('courseArr')) ? JSON.parse(localStorage.getItem('courseArr')) : [];
    if (courseArr.length > 0) {
        courseArr.forEach(course => {
            adminCourses.innerHTML += `
            <div class="card">
                <div class="card-body text-center">
                    <img src="${course.courseImage}" alt="" width="inherit">
                <p class="card-text ">${course.courseName}</p>
                <button class="btn btn-block btn-primary assignCourseBtn" data-toggle="modal" data-target="#exampleModal" onclick='assignCourse(${course.courseId});' >Assign
                    Course</button>
                </div>
            </div>
            `
        })
    }
}

const addCourse = () => {
    if (checkCourseValidation()) {
        requiredCourseName.style.display = 'none';
        courseAlreadyExist.style.display = 'none';
        requiredCourseImage.style.display = 'none';
        requiredCourseLink.style.display = 'none'

        let alreadyExistCourse = false;
        const courseArr = JSON.parse(localStorage.getItem('courseArr')) ? JSON.parse(localStorage.getItem('courseArr')) : [];
        let courseId;

        courseArr.forEach(course => {
            if (course.courseName === courseName.value) {
                alreadyExistCourse = true;
            }
        });

        if (!alreadyExistCourse) {
            courseAlreadyExist.style.display = 'none';

            if (courseArr.length > 0) {
                courseId = courseArr[courseArr.length - 1].courseId + 1;
            } else {
                courseId = 1;
            }

            const courseObj = {
                courseId: courseId,
                courseName: courseName.value,
                courseImage: courseImage.value,
                courseLink: courseLink.value,
                assignTo: []
            }

            console.log(courseObj);
            courseArr.push(courseObj);
            localStorage.setItem('courseArr', JSON.stringify(courseArr));
            $('#addCourseModal').modal('hide');
            showCoursesToAdmin();

            courseName.value = '';
            courseLink.value = '';
            courseImage.value = '';
        } else {
            courseAlreadyExist.style.display = 'initial';
        }
    }
}

const assignCourse = (courseId) => {
    console.log(courseId);
    currentCourseId = courseId;
    const userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];
    const courseArr = JSON.parse(localStorage.getItem('courseArr')) ? JSON.parse(localStorage.getItem('courseArr')) : [];
    let count = 1;
    console.log(studentList);
    studentList.innerHTML = '';

    userArr.forEach(user => {
        if (user.type === 'student') {
            studentList.innerHTML += `
            <tr class='text-center'>
                <th scope="row">${count}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                   <input type='checkbox' name='studentsForCourse' onclick='assign()' ${user.courses.indexOf(currentCourseId) >=0 ? 'checked' : ''} value=${user.email}>
                </td>
            </tr>
            `
            count++;
        }
    })
}

const assign = () => {
    console.log(studentsForCourse)
    const userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];
    studentsForCourse.forEach(student => {
        if (student.checked) {
            console.log(student.value);
            userArr.forEach((user, i) => {
                if (user.email === student.value) {
                    if(user.courses.indexOf(currentCourseId) === -1) {
                        userArr[i].courses.push(currentCourseId);
                    }
                }
            })
        } else {
            userArr.forEach((user, i) => {
                if(user.email === student.value) {
                    let index = user.courses.indexOf(currentCourseId);
                    userArr[i].courses.splice(index,1);
                }
            })
        }

        localStorage.setItem('userArr', JSON.stringify(userArr));
    })

}

const showCoursesToStudent = () => {
    const currentlyLoggedInUser = localStorage.getItem('currentlyLoggedInUser') ? JSON.parse(localStorage.getItem('currentlyLoggedInUser')) : [];
    const userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];
    const courseArr = JSON.parse(localStorage.getItem('courseArr')) ? JSON.parse(localStorage.getItem('courseArr')) : [];
    currentlyLoggedInUser.forEach(loggedInUser => {
        if (loggedInUser.type === 'student') {
            userArr.forEach(user => {
                if (user.email === loggedInUser.email) {
                    courseArr.forEach(course => {
                        user.courses.forEach(courseId => {
                            if (courseId === course.courseId) {
                                console.log(course.courseLink)
                                studentCourses.innerHTML += `
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img src="${course.courseImage}" alt="" width="inherit">
                                        <p class="card-text ">${course.courseName}</p>
                                        <a class="btn btn-block btn-primary"  href='${course.courseLink}' target='_blank' >Start Course</a>
                                    </div>
                                </div>

                                `
                            }
                        })
                    })
                }
            })
        }
    })
}

$(".togglePassword").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    let input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

if (currentPage === 'studentDashboard.html') {
    if (!checkRouteProtection()) {
        window.location.href = `./login.html`;
        // window.location.href = `${defaultUrl}login.html`;
    } else {
        let currentUser = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));
        showCoursesToStudent();     
        currentUser.forEach(user => {
            if (user.type === 'student') {
                dashboardType.textContent = 'Student';
                nameOnDashboard.textContent = `${user.name}`
            }
        })
    }
}

if (currentPage === 'adminDashboard.html') {
    if (!checkRouteProtection()) {
        // window.location.href = `${defaultUrl}login.html`;
        window.location.href = `./login.html`;
    } else {
        showCoursesToAdmin();
        let currentUser = JSON.parse(localStorage.getItem('currentlyLoggedInUser'));
        currentUser.forEach(user => {
            if (user.type === 'admin') {
                dashboardType.textContent = 'admin';
                nameOnDashboard.textContent = `${user.name}`
            }
        })
    }
}

if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
        register();
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        login();
    })
}

if (logout) {
    logout.addEventListener('click', () => {
        logoutFunction();
    })
}

if (addCourseBtn) {
    addCourseBtn.addEventListener('click', () => {
        addCourse();
    })
}

if(asignBtn) {
    asignBtn.addEventListener('click', () => {
        $('#exampleModal').modal('hide');
    })
}