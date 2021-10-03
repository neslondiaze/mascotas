    const btnEliminar = document.querySelector('#btnEliminar')

    btnEliminar.addEventListener('click', async () => {
        const id = btnEliminar.dataset.id
        console.log('id', id)
        try {
            const data = await fetch(`/mascotas/${id}`, {
                method: 'delete'
            })
            const res = await data.json()

            if (res.estado) {
                toastr.warning(res.mensaje, {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
                window.location.href = '/mascotas'
            } else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    })

    const formularioEditar = document.querySelector('#formularioEditar')

    formularioEditar.addEventListener('submit', async (e) => {
        e.preventDefault()

        const nombre = document.querySelector('#nombreInput').value
        const descripcion = document.querySelector('#descripcionInput').value
        const id = formularioEditar.dataset.id

        try {
            const data = await fetch(`/mascotas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    descripcion
                })
            })
            const res = await data.json()
            if (res.estado) {
                toastr.success(res.mensaje, {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
                window.location.href = '/mascotas'
            } else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }

    })