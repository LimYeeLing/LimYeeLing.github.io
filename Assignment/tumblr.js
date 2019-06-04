const API_KEY = 'uuDm0coDsQMEB4y4cnGzHjBTpeqgYnveJycJniFHX18L45vSDG';

let button_div = document.getElementById('buttons')
let gallery_div = document.getElementById('gallery')
let score_span = document.getElementById('score')

let score = 0
let words = ['fish', 'house', 'dog', 'cat', 'zebra', 'bottle', 'shell']
let correct_answer = ''


generate()


words.forEach(function (word) {
    let new_button = document.createElement('button')
    new_button.innerHTML = word
    new_button.classList.add('btn')
    new_button.classList.add('btn-primary', 'btn-info', 'mx-2')
    new_button.onclick = function (event) {
        console.log(event.target.innerHTML);
        console.log(correct_answer);

        if (word == correct_answer) {
            alert('you won')
            score_span.innerHTML++
            generate()
        } else {
            score_span.innerHTML--
            alert("Wrong!")
            generate()
        }
    }
    button_div.append(new_button)
})

function generate() {
    gallery_div.innerHTML = null
    let random_number = Math.floor(Math.random() * words.length)
    correct_answer = words[random_number]


    fetch(`https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${correct_answer}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            result.response.forEach(function (post) {
                if (post.type == "photo") {
                    console.log(post.photos[0].original_size.url)
                    const pic = document.createElement('img')
                    pic.src = post.photos[0].original_size.url
                    pic.height = 200
                    gallery_div.appendChild(pic)
                }
            })
        })

}





console.log(button_div);


