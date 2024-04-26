import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
export default function Modal({ children, open, className = '',onClose }) {
    const modalRef = useRef()
    useEffect(() => {
        const modal = modalRef.current
        if (open) {
            modal.showModal()
        } else {

        }
        return () => { modal.close() }
    }, [open])
    return createPortal(<dialog className={`modal ${className}`} ref={modalRef} onClose={onClose} >
        {children}
    </dialog>, document.getElementById('modal'))
}