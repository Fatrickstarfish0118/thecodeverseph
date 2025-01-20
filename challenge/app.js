    const challenges = [
        {
            description: "Write a function that reverses a string.",
            test: function(code) {
                try {
                    let reverseFunction = new Function(code + '; return reverseString("hello");');
                    let result = reverseFunction();
                    return result === "olleh";
                } catch (error) {
                    return false;
                }
            }
        },
        {
            description: "Write a function that checks if a number is even.",
            test: function(code) {
                try {
                    let evenFunction = new Function(code + '; return isEven(2);');
                    let result = evenFunction();
                    return result === true;
                } catch (error) {
                    return false;
                }
            }
        },
        {
            description: "Write a function that adds two numbers.",
            test: function(code) {
                try {
                    let addFunction = new Function(code + '; return add(2, 3);');
                    let result = addFunction();
                    return result === 5;
                } catch (error) {
                    return false;
                }
            }
        },
        {
            description: "Write a function that finds the largest number in an array.",
            test: function(code) {
                try {
                    let largestFunction = new Function(code + '; return findLargest([1, 3, 2]);');
                    let result = largestFunction();
                    return result === 3;
                } catch (error) {
                    return false;
                }
            }
        },
        {
            description: "Write a function that counts the vowels in a string.",
            test: function(code) {
                try {
                    let countVowelsFunction = new Function(code + '; return countVowels("hello");');
                    let result = countVowelsFunction();
                    return result === 2;
                } catch (error) {
                    return false;
                }
            }
        }
    ];

    let currentLevel = 0;

    document.addEventListener("DOMContentLoaded", function () {
        const levelNumber = document.getElementById('level-number');
        const challengeDescription = document.getElementById('challenge-description');
        const codeInput = document.getElementById('code-input');
        const submitBtn = document.getElementById('submit-btn');
        const resultDisplay = document.getElementById('result');
        const homeBtn = document.getElementById('home-btn');
        const challengeSection = document.querySelector('.challenge');
        const backHomeBtn = document.getElementById('home-btn');

        // Load the first challenge
        loadChallenge();

        // Handle code submission
        submitBtn.addEventListener('click', function () {
            const userCode = codeInput.value;
            const challenge = challenges[currentLevel];
            
            if (challenge.test(userCode)) {
                resultDisplay.textContent = "Success!";
                setTimeout(() => {
                    resultDisplay.textContent = '';
                    currentLevel++;

                    if (currentLevel < challenges.length) {
                        loadChallenge();
                    } else {
                        challengeSection.style.display = "none";
                        document.getElementById('congrats-message').style.display = "block";
                        homeBtn.style.display = "inline-block";
                        submitBtn.style.display = "none";
                    }
                }, 1500);
            } else {
                resultDisplay.textContent = "Failure. Try again.";
            }
        });

        homeBtn.addEventListener('click', function () {
            currentLevel = 0;
            resultDisplay.textContent = '';
            document.getElementById('congrats-message').style.display = "none";
            challengeSection.style.display = "block";
            loadChallenge();
            submitBtn.style.display = "block";
            homeBtn.style.display = "none";
        });

        function loadChallenge() {
            levelNumber.textContent = currentLevel + 1;
            challengeDescription.textContent = challenges[currentLevel].description;
            codeInput.value = '';
        }
    });
