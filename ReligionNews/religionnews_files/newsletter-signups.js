function newsletter_signups() {
    //TODO fix this to allow newsletters to be added in settings
    addNewsletterFields(0);


    // document.getElementById('add-newsletter').addEventListener('click', function() {
    //     var index = document.querySelectorAll('.newsletters-container p').length;
    //     addNewsletterFields(index);
    // });

    // document.getElementsByClassName('remove-newsletter').forEach(function(button) {
    //     button.addEventListener('click', function() {
    //         button.closest('p').remove();
    //     });
    // });
}

function addNewsletterFields(index) {
    var fieldId = 'newsletter-option-' + index;
    var fieldName = 'widget-newsletter_signup_widget[newsletters][' + index + ']';

    var el = document.createElement('div');

    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', fieldId + '_name');
    nameLabel.textContent = 'Newsletter Name:';

    var nameInput = document.createElement('input');
    nameInput.id = fieldId + '_name';
    nameInput.name = fieldName + '[name]';
    nameInput.type = 'text';

    var idLabel = document.createElement('label');
    idLabel.setAttribute('for', fieldId + '_id');
    idLabel.textContent = 'Newsletter ID:';

    var idInput = document.createElement('input');
    idInput.id = fieldId + '_id';
    idInput.name = fieldName + '[id]';
    idInput.type = 'text';

    var removeButton = document.createElement('button');
    removeButton.classList.add('remove-newsletter');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', function() {
        el.remove();
    });

    el.appendChild(nameLabel);
    el.appendChild(nameInput);
    el.appendChild(idLabel);
    el.appendChild(idInput);
    el.appendChild(removeButton);

    // document.querySelector('.newsletters-container').appendChild(el);
}
