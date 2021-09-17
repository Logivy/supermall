import Toast from './Toast';

const toast ={}

toast.install = function(Vue){
    const toastConstructor = Vue.extend(Toast)

    const toast = new toastConstructor().$mount(document.createElement("div"))

    document.body.appendChild(toast.$el)
    
    Vue.prototype.$toast = toast
}


export default toast
