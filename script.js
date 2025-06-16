const quizData = [
    {
        question: "It returns a reference to the element with the specified ID or null if no matching element exists.",
        options: ["document.querySelector()", "document.getElementsByClassName()", "document.getElementById()", "document.getElementsByTagName()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "Used to declare variables.",
        options: ["const", "let", "var", "function"],
        correctAnswer: "var"
    },
    {
        question: "Is used to declare immutable variables.",
        options: ["var", "let", "const", "static"],
        correctAnswer: "const"
    },
    {
        question: "Used to define the typeface of an element.",
        options: ["font-size", "color", "font-family", "text-align"],
        correctAnswer: "font-family"
    },
    {
        question: "You can declare a variable using the ___ ____ ___keywords",
        options: ["function, class, or object", "var, let, or const", "if, else, or switch", "try, catch, or finally"],
        correctAnswer: "var, let, or const"
    },
    {
        question: "Reusable blocks of code that perform specific tasks. They help organize your code and make it more maintainable.",
        options: ["variables", "loops", "conditions", "function"],
        correctAnswer: "function"
    },
    {
        question: "DOM meaning",
        options: ["Document Order Model", "Document Object Markup", "Document Object Model", "Dynamic Object Manipulation"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "A standalone entity with properties.",
        options: ["variable", "array", "object", "string"],
        correctAnswer: "object"
    },
    {
        question: "Occurs when the user pushes a keyboard key.",
        options: ["onclick", "onmouseover", "onkeydown", "onfocus"],
        correctAnswer: "onkeydown"
    },
    {
        question: "Allow you to embed expressions inside strings using backticks (`).",
        options: ["Concatenation", "String Literals", "Template Literals", "Regular Expressions"],
        correctAnswer: "Template Literals"
    },
    {
        question: "The _______ statement allows you to execute different blocks of code based on a condition.",
        options: ["for", "while", "if-else", "switch"],
        correctAnswer: "if-else"
    },
    {
        question: "Represents both integers and floating-point numbers",
        options: ["string", "boolean", "number", "null"],
        correctAnswer: "number"
    },
    {
        question: "Which of these is NOT a type of operator that allows you to perform different tasks in JavaScript?",
        options: ["Arithmetic Operators", "Assignment Operators", "Comparison Operators", "Declaration Operators"],
        correctAnswer: "Declaration Operators"
    },
    {
        question: "Represents an intentional absence of any value.",
        options: ["undefined", "empty string", "zero", "null"],
        correctAnswer: "null"
    },
    {
        question: "Used to assign values to variables.",
        options: ["Comparison operators", "Arithmetic operators", "Logical operators", "Assignment operators"],
        correctAnswer: "Assignment operators"
    },
    {
        question: "Represents an ordered list of values.",
        options: ["object", "string", "array", "boolean"],
        correctAnswer: "array"
    },
    {
        question: "Hand-lettered look and are thought to convey an elegant feel.",
        options: ["sans-serif typeface", "serif typeface", "monospace typeface", "script typeface"],
        correctAnswer: "script typeface"
    },
    {
        question: "Generic fonts should always be quoted or unquoted?",
        options: ["quoted", "unquoted", "it depends", "either is fine"],
        correctAnswer: "unquoted"
    },
    {
        question: "Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.",
        options: ["functions", "variables", "events", "methods"],
        correctAnswer: "events"
    },
    {
        question: "A unique name given by the developer.",
        options: ["Value", "Type", "Name", "Identifier"],
        correctAnswer: "Name"
    },
    {
        question: "Exit-controlled loop. It executes the code block at least once, and then continues as long as the specified condition is true.",
        options: ["for loop", "while loop", "do-while loop", "for-each loop"],
        correctAnswer: "do-while loop"
    },
    {
        question: "Can be grouped together and added to the bottom of the CSS file.",
        options: ["Inline styles", "Internal stylesheets", "External stylesheets", "Adding Media Query"],
        correctAnswer: "Adding Media Query"
    },
    {
        question: "Overall design and practice of organizing text to communicate and engage with the reader",
        options: ["Calligraphy", "Layout", "Typography", "Graphic Design"],
        correctAnswer: "typography"
    },
    {
        question: "Represents unique and immutable values",
        options: ["objects", "strings", "booleans", "symbols"],
        correctAnswer: "symbols"
    },
    {
        question: "Used to create designs that integrate with the look and feel of the user’s operating system.",
        options: ["web fonts", "system fonts", "custom fonts", "generic fonts"],
        correctAnswer: "system fonts"
    },
    {
        question: "It includes variations such as size, weight (bold, regular, light), and style (italic, oblique).",
        options: ["font-family", "font", "typeface", "typography"],
        correctAnswer: "font"
    },
    {
        question: "The ________ shows a pop-up dialog box containing a message, an input field for the user to type their input, and two buttons: “OK” and “Cancel.”",
        options: ["alert() method", "confirm() method", "prompt() method", "console.log() method"],
        correctAnswer: "prompt() method"
    },
    {
        question: "A block of statement(s) to be executed",
        options: ["Header", "Footer", "Body", "Parameter"],
        correctAnswer: "Body"
    },
    {
        question: "The function to run when the event occurs. An event object is passed to this function as the first parameter.",
        options: ["callback", "handler", "function", "listener"],
        correctAnswer: "function"
    },
    {
        question: "The specific instance of a typeface",
        options: ["font family", "font", "typography", "weight"],
        correctAnswer: "font"
    },
    {
        question: "Collection of related fonts.",
        options: ["font", "typeface", "font family", "font-size"],
        correctAnswer: "font family"
    },
    {
        question: "You can modify properties of the object, but not reassign the entire object",
        options: ["var", "let", "const", "static"],
        correctAnswer: "const"
    },
    {
        question: "Media queries must start with the _______,",
        options: ["@screen", "@media", "@import", "@charset"],
        correctAnswer: "@media"
    },
    {
        question: "Represents logical values: true or false.",
        options: ["number", "string", "boolean", "null"],
        correctAnswer: "boolean"
    },
    {
        question: "____ in JavaScript are unordered collections of related data. represented by “key:value” pairs.",
        options: ["Arrays", "Strings", "Objects", "Numbers"],
        correctAnswer: "Objects"
    },
    {
        question: "Allow you to respond to specific events that occur in the browser",
        options: ["Event Listeners", "Event Handlers", "Event Bubbling", "Event Capturing"],
        correctAnswer: "Event Handlers"
    },
    {
        question: "Used to declare block-scoped variables.",
        options: ["var", "const", "let", "global"],
        correctAnswer: "let"
    },
    {
        question: "Have an appearance with embellishments or ornaments. These fonts are often used for creative and eye-catching designs.",
        options: ["serif typefaces", "sans serif typefaces", "decorative typefaces", "script typefaces"],
        correctAnswer: "decorative typefaces"
    },
    {
        question: "Occurs when an element receives focus (e.g., when the user clicks inside an input field).",
        options: ["onclick", "onblur", "onfocus", "onchange"],
        correctAnswer: "onfocus"
    },
    {
        question: "The ______ allows you to execute a block of code if a specified condition evaluates to true",
        options: ["for statement", "while statement", "if statement", "switch statement"],
        correctAnswer: "if statement"
    },
    {
        question: "Triggered when the browser window is resized",
        options: ["onload", "onscroll", "onresize", "onchange"],
        correctAnswer: "onresize"
    },
    {
        question: "It is a fundamental part of the HTML Document Object Model (DOM)",
        options: ["document.querySelector()", "document.getElementById()", "document.createElement()", "document.write()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "Can be added below related CSS blocks",
        options: ["Inline styles", "Internal stylesheets", "Adding Media Query", "External scripts"],
        correctAnswer: "Adding Media Query"
    },
    {
        question: "A programming language that plays a crucial role in web development. Together with HTML and CSS, it forms the foundation for creating interactive and dynamic web pages.",
        options: ["Python", "Java", "JavaScript", "C#"],
        correctAnswer: "javascript"
    },
    {
        question: "A named container that holds a value. Variables allow you to store and manipulate data throughout your application.",
        options: ["function", "object", "variable", "array"],
        correctAnswer: "variable"
    },
    {
        question: "Define by the browser. Fonts will vary across devices and operating systems",
        options: ["custom font families", "web font families", "generic font families", "system font families"],
        correctAnswer: "generic font families"
    },
    {
        question: "Denotes a variable that has been declared but not initialized",
        options: ["null", "empty", "undefined", "void"],
        correctAnswer: "undefined"
    },
    {
        question: "Each character occupies the same amount of horizontal space.",
        options: ["serif typefaces", "sans serif typefaces", "monospace typefaces", "script typefaces"],
        correctAnswer: "monospace typefaces"
    },
    {
        question: "Variables declared with ____ were commonly used in JavaScript code before 2015.",
        options: ["let", "const", "var", "function"],
        correctAnswer: "var"
    },
    {
        question: "_______ make it possible to selectively apply CSS based on specific conditions, such as different screen sizes of device orientation.",
        options: ["CSS animations", "Transitions", "Media queries", "Flexbox"],
        correctAnswer: "Media queries"
    },
    {
        question: "The design of a set of letters, numbers, and symbols that share common design features.",
        options: ["font", "typeface", "font family", "typography"],
        correctAnswer: "typeface"
    },
    {
        question: "The ________ allows you to execute a block of code repeatedly for a specified number of iterations.",
        options: ["while loop", "do-while loop", "for loop", "for-in loop"],
        correctAnswer: "for loop"
    },
    {
        question: "Do not have decorative lines and are often thought of as a contemporary and modern.",
        options: ["serif typefaces", "sans serif typefaces", "script typefaces", "decorative typefaces"],
        correctAnswer: "sans serif typefaces"
    },
    {
        question: "Fired when an HTML element (such as an input field) has been changed",
        options: ["onclick", "onfocus", "onchange", "onblur"],
        correctAnswer: "onchange"
    },
    {
        question: "Can be used as a fallback or primary font option",
        options: ["web fonts", "system fonts", "custom fonts", "google fonts"],
        correctAnswer: "system fonts"
    },
    {
        question: "Fired when an element loses focus (e.g., when the user clicks outside an input field)",
        options: ["onfocus", "onblur", "onclick", "onchange"],
        correctAnswer: "onblur"
    },
    {
        question: "Also known as plain JavaScript, refers to the original, unmodified JavaScript language without any additional frameworks or libraries.",
        options: ["jQuery", "React", "Angular", "vanilla javascript"],
        correctAnswer: "vanilla javascript"
    },
    {
        question: "When a weight is specified for which no font files exist, the typeface with the closes weight is used",
        options: ["font-family", "font-style", "font-weight", "font-size"],
        correctAnswer: "font-weight"
    },
    {
        question: "Represents a web page as a tree structure, where each node corresponds to an object representing a part of the document.",
        options: ["CSSOM", "HTML structure", "DOM", "JavaScript engine"],
        correctAnswer: "DOM"
    },
    {
        question: "Triggered when the user moves the mouse away from an HTML element",
        options: ["onmouseover", "onclick", "onmouseout", "onmousemove"],
        correctAnswer: "onmouseout"
    },
    {
        question: "Triggered when the user clicks an HTML element (e.g., a button, link, or image).",
        options: ["onkeydown", "onmouseover", "onclick", "onchange"],
        correctAnswer: "onclick"
    },
    {
        question: "Triggered when a form is submitted (e.g., by clicking a submit button)",
        options: ["onclick", "onchange", "onsubmit", "oninput"],
        correctAnswer: "onsubmit"
    },
    {
        question: "To pass on input values to function.",
        options: ["Return values", "Variables", "Parameters /arguments", "Arguments only"],
        correctAnswer: "Parameters /arguments"
    },
    {
        question: "It can perform calculations, logical checking, and modify the existing CSS and HTML codes",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        correctAnswer: "javascript"
    },
    {
        question: "It must be loaded into the HTML file with <link> and a media attribute.",
        options: ["External JavaScript", "External CSS", "Adding Media Query", "Inline styling"],
        correctAnswer: "Adding Media Query"
    },
    {
        question: "Contains key-value pairs (collections of data)",
        options: ["Array", "String", "Object", "Number"],
        correctAnswer: "object"
    },
    {
        question: "-ES6 introduced arrow functions, which provide a concise syntax for writing function expressions.",
        options: ["Regular functions", "Anonymous functions", "Arrow functions", "Named functions"],
        correctAnswer: "arrow functions"
    },
    {
        question: "The event name (without the “on” prefix). For example, use \"click\" instead of \"onclick\"",
        options: ["type", "name", "event", "trigger"],
        correctAnswer: "event"
    },
    {
        question: "You can load fonts from either a remote server or a locally-installed font on the user’s own computer.",
        options: ["@import rule", "@media rule", "@font-face rule", "@charset rule"],
        correctAnswer: "@font-face rule"
    },
    {
        question: "Method in JavaScript allows you to attach event handlers to HTML elements",
        options: ["attachEvent", "addEventListener", "handleEvent", "registerEvent"],
        correctAnswer: "addEventListener"
    },
    {
        question: "JavaScript functions are defined with the ______ keyword.",
        options: ["define", "create", "function", "method"],
        correctAnswer: "function"
    },
    {
        question: "Represents textual data (sequences of characters).",
        options: ["number", "boolean", "string", "array"],
        correctAnswer: "string"
    },
    {
        question: "Fired when the user moves the mouse pointer over an HTML element.",
        options: ["onclick", "onmouseout", "onmouseover", "onmousemove"],
        correctAnswer: "onmouseover"
    },
    {
        question: "Allows you to extract values from objects or arrays easily",
        options: ["Concatenation", "Spreading", "Destructing", "Cloning"],
        correctAnswer: "Destructing"
    },
    {
        question: "Fired when the browser has finished loading the page.",
        options: ["onready", "onload", "onDOMContentLoaded", "oncomplete"],
        correctAnswer: "onload"
    },
    {
        question: "Used to embed or reference JavaScript code within an HTML document.",
        options: ["<style> tag", "<link> tag", "<script> tag", "<html> tag"],
        correctAnswer: "<script> tag"
    },
    {
        question: "Used to test the width of the viewport. Ranges can be specified with min-width and max-width",
        options: ["Media Feature: height", "Media Feature: orientation", "Media Feature: width", "Media Feature: resolution"],
        correctAnswer: "Media Feature: width"
    },
    {
        question: "Allows you to specify custom fonts for your web design.",
        options: ["@import rule", "@font-face rule", "@media rule", "@charset rule"],
        correctAnswer: "@font-face rule"
    },
    {
        question: "Often associated with a traditional or formal aesthetic.",
        options: ["sans-serif typefaces", "script typefaces", "serif typefaces", "decorative typefaces"],
        correctAnswer: "serif typefaces"
    },
    {
        question: "The ______ provides an efficient way to handle multiple cases based on the value of an expression.",
        options: ["if-else statement", "for loop", "while loop", "switch statement"],
        correctAnswer: "switch statement"
    },
    {
        question: "The ______________ allows you to write concise conditional statements",
        options: ["if-else statement", "switch statement", "ternary operator", "loop statement"],
        correctAnswer: "ternary operator"
    },
    {
        question: "The ______ executes a block of code as long as a specified condition remains true.",
        options: ["for loop", "do-while loop", "while loop", "if statement"],
        correctAnswer: "while loop"
    }
];

let shuffledQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userScores = JSON.parse(localStorage.getItem('quizScores')) || [];

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const finalScoreElement = document.getElementById('final-score');
const totalQuestionsElement = document.getElementById('total-questions');
const previousScoresList = document.getElementById('previous-scores');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuizData = [...quizData]; // Clone to shuffle
    shuffleArray(shuffledQuizData);

    questionContainer.classList.remove('hidden');
    questionContainer.classList.add('active');
    resultsContainer.classList.remove('active');
    resultsContainer.classList.add('hidden');

    displayQuestion();
    displayPreviousScores();
}

function displayQuestion() {
    resetState();
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuizData.length}`;
    questionTextElement.innerText = currentQuestion.question;

    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(button);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.remove('show');
    nextButton.style.opacity = '0';
    nextButton.style.pointerEvents = 'none';
    nextButton.style.transform = 'translateY(10px)';

    feedbackElement.innerText = '';
    feedbackElement.classList.remove('correct', 'incorrect');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(selectedButton) {
    const currentQuestion = shuffledQuizData[currentQuestionIndex];

    // Convert both the selected answer and the correct answer to lowercase for comparison
    const selectedAnswerNormalized = selectedButton.innerText.toLowerCase().trim();
    const correctAnswerNormalized = currentQuestion.correctAnswer.toLowerCase().trim(); // Trim whitespace too

    const correct = selectedAnswerNormalized === correctAnswerNormalized;

    // Disable all buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none'; // Ensure no more clicks

        // THIS IS THE KEY FIX: Compare the button's text (normalized) to the correct answer (normalized)
        if (button.innerText.toLowerCase().trim() === correctAnswerNormalized) {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('incorrect');
        }
    });

    if (correct) {
        score++;
        feedbackElement.innerText = 'Correct!';
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.innerText = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
        feedbackElement.classList.add('incorrect');
    }

    setTimeout(() => {
        nextButton.classList.add('show');
    }, 500);
}

function clearStatusClasses(element) {
    element.classList.remove('correct', 'incorrect');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.remove('active');
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    resultsContainer.classList.add('active');

    finalScoreElement.innerText = score;
    totalQuestionsElement.innerText = shuffledQuizData.length;

    const now = new Date();
    // Using 'en-PH' locale for Philippine-specific date/time formatting
    // timeZone is set to 'Asia/Manila' for accuracy
    const dateTimeString = now.toLocaleString('en-PH', {
        timeZone: 'Asia/Manila',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    userScores.push({ score: score, total: shuffledQuizData.length, date: dateTimeString });
    userScores = userScores.slice(-10); // Keep only the latest 10 scores
    localStorage.setItem('quizScores', JSON.stringify(userScores));

    displayPreviousScores();
}

function displayPreviousScores() {
    previousScoresList.innerHTML = '';
    if (userScores.length === 0) {
        previousScoresList.innerHTML = '<li>No previous scores yet.</li>';
        return;
    }
    [...userScores].reverse().forEach((s, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Score: ${s.score} / ${s.total} (${s.date})`;
        previousScoresList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', startQuiz);