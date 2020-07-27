const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form .form__row input')

const fields = {
  user : false,
  name : false,
  password : false,
  telephone : false,
  email : false
}

const expressions = {
  user: /^[a-zA-Z0-9ñ\_\-]{4,16}$/, // Letters, numbers, hyphen and underscore
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and space. Can carry promotion
  password: /^.{4,12}$/, // 4 to 12 digits
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telephone: /^\d{7,14}$/ // 7 to 14 numbers
}

const validateForm = (e) => {
  switch (e.target.name) {
    case 'user':
      validateInput(expressions.user, e.target, e.target.name)
      break;
    case 'name':
      validateInput(expressions.name, e.target, e.target.name)
      break;
    case 'password':
      validateInput(expressions.password, e.target, e.target.name)
      validatePassword()
      break;
    case 'password2':
      validatePassword()
      break;
    case 'telephone':
      validateInput(expressions.telephone, e.target, e.target.name)
      break;
    case 'email':
      validateInput(expressions.email, e.target, e.target.name)
      break;
  }
}

const validateInput = (expression, input, field) => {
  const changeInInput = document.getElementById(`group__${field}`)
  const icon = document.querySelector(`#group__${field} .form__validation-status`)
  const indication = document.querySelector(`#group__${field} .form__input-error`)
  if (input.value === '') {
    changeInInput.classList.remove('incorrect')
    icon.classList.remove('fa-times-circle')
    changeInInput.classList.remove('correct')
    icon.classList.remove('fa-check-circle')
  }else if (expression.test(input.value)) {
    changeInInput.classList.remove('incorrect')
    changeInInput.classList.add('correct')
    icon.classList.add('fa-check-circle')
    icon.classList.remove('fa-times-circle')
    indication.classList.remove('active')
    fields[field] = true
  } else {
    changeInInput.classList.add('incorrect')
    changeInInput.classList.remove('correct')
    icon.classList.add('fa-times-circle')
    icon.classList.remove('fa-check-circle')
    indication.classList.add('active')
    fields[field] = false
  }
}

const validatePassword = () => {
  const password = document.getElementById('password')
  const password2 = document.getElementById('password2')
  const groupPassword2 = document.getElementById('group__password2')
  const icon = document.querySelector('#group__password2 .form__validation-status')
  const indication = document.querySelector(`#group__password2 .form__input-error`)

  if(password2.value === ''){
    groupPassword2.classList.remove('incorrect')
    icon.classList.remove('fa-times-circle')
    groupPassword2.classList.remove('correct')
    icon.classList.remove('fa-check-circle')
  }else if(password.value !== password2.value) {
    groupPassword2.classList.add('incorrect')
    groupPassword2.classList.remove('correct')
    icon.classList.add('fa-times-circle')
    icon.classList.remove('fa-check-circle')
    indication.classList.add('active')
    fields['password'] = false
  }else{
    groupPassword2.classList.remove('incorrect')
    groupPassword2.classList.add('correct')
    icon.classList.add('fa-check-circle')
    icon.classList.remove('fa-times-circle')
    indication.classList.remove('active')
    fields['password'] = true
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const terms = document.getElementById('terms');
  const error = document.querySelector('.form__group-post.message p')
  if(fields.user && fields.name && fields.password && fields.telephone && fields.email && terms.checked){
    form.reset()
    const message = document.querySelector('.form__mesagge-success')
    message.classList.add('active')
    error.classList.remove('active')
    setTimeout(() => {
      message.classList.remove('active')
    }, 5000)

    document.querySelectorAll('.form__group-input').forEach((field) => {
      field.classList.remove('correct')
    })
  }else{
    error.classList.add('active')
    setTimeout(() => {
      error.classList.remove('active')
    }, 5000)
  }
})