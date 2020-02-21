
const siteURL = {
    splitAt(){
        
        if(window.location.href.startsWith("https://trinity-nutshell.netlify.com/")){
            return "com";
        } else {
            return "src"
        }
        
    },
    addIn(){
        if(window.location.href.startsWith("https://trinity-nutshell.netlify.com/")){
            return "com";
        } else {
            return "src/index.html"
        }
    }
}
export default siteURL;