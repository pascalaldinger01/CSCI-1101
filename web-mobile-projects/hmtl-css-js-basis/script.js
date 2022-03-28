window.addEventListener("load", function ()
{
    let counter = 0;

    function butttonClicker()
    {
        counter++;

        let  clickedCounterElement = document.getElementById("clickcounter");

        clickedCounterElement.innerHTML = "Clicked " + counter + " times."
    }

    let clickButtonElement = document.getElementById("clickbuttom")

    clickedButtomElement.addEventListener("click", buttonClicked);
});