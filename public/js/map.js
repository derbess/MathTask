setTimeout(()=>{
    $('.map-block').html(`<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6368125159056!2d76.91160861539886!3d43.238073787192825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f0125aaf6c3%3A0xca07b773e2de9c13!2zRGVjb2RlIHwg0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjw!5e0!3m2!1sen!2skz!4v1618826815546!5m2!1sen!2skz"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
}, 600)

const year = new Date().getFullYear()
$('#year').html(year)