function login(form)
{

    form.email.value = form.email.value.toLoweCase()
    form.password.value = form.password.value.toLoweCase()

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