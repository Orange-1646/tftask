export default function (param) {
    let url = `https://www.easy-mock.com/mock/5cd23e94d8320148e4bf1b2a${param}`
    let mPromise = new Promise((resolve) => {
        let xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp')
        xhr.open('get', url, true)
        xhr.send(null)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(1)
                    resolve(JSON.parse(xhr.responseText).data)
                }
            }
        }
    })

    return mPromise
}
