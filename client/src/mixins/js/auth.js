export default {
    methods: {
        setAuthCookie(payload) {
            for (let key in payload) {
                let d = new Date();
                d.setTime(d.getTime() + (7*24*60*60*1000));
                let expires = "expires="+ d.toUTCString();
                document.cookie = key + "=" + payload[key] + ";" + expires + ";path=/";
            }
        },
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
        },
        getAuthCookie() {
            let payload = {
                name: this.getCookie('name'),
                secret: this.getCookie('secret')
            }

            return payload
        }
    }
}