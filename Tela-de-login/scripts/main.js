function login(form)
{

    form.email.value = form.email.value.toLowerCase()
    form.password.value = form.password.value.toLowerCase()

    if ((form.email.value == 'nicolas@gmail.com') && (form.password.value == '123'))
    {
        location = 'index.html'
    }
    else 
    {
        form.email.value = ''
        form.password.value = ''
        alert('Dados incorretos');
    }
}
