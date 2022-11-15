const file = document.getElementById('file')
const form = document.querySelector('form')
const noti = document.getElementById('noti')
const btnAccess = document.querySelector('.acces')

form.addEventListener('click',() => {
    file.click()
})

file.addEventListener('change',() => {
    noti.textContent = 'QR CODE ĐÃ ĐƯỢC XỬ LÝ'
})

btnAccess.addEventListener('click',() => {
    if(typeof file.files[0] === 'null')
    {
        noti.textContent = 'CLICK ĐỂ XEM MÃ QR CODE CỦA BẠN'
        return false 
    }
    else{
        let formData = new FormData()
        formData.append('file',file.files[0])
        get_url(formData)
    }
})

function get_url(formData){
    fetch('https://api.qrserver.com/v1/read-qr-code/',{
        method:'post',
        body: formData, 
    })
    .then((res) => res.json())
    .then((data) => {
        let url = data[0]['symbol'][0]['data']
        noti.textContent='CLICK ĐỂ MỞ '
        window.open(url,'blank')

    })
}

   