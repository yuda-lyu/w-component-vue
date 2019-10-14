function cancelEvent(e) {
    if (window.event) {
        e.cancelBubble = true //IE11
    }
    else {
        e.stopPropagation()
    }
    e.preventDefault()
}


export default cancelEvent
