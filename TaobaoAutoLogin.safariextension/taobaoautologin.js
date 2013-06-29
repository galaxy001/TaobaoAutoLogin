var settings;

// Add event listener to get settings.
safari.self.addEventListener('message', function(event) {
    if (event.name === 'setSettings') {
        settings = event.message;
    }
}, false);

// Get settings from proxy page.
safari.self.tab.dispatchMessage('getSettings');

var checkSafeLoginStatusInt = window.setInterval('checkSafeLoginStatus()', 10);
function checkSafeLoginStatus() {
    var safeLoginCheckbox = document.getElementById('J_SafeLoginCheck');
    var isSafeLogin = safeLoginCheckbox.checked;

    // If login box is loaded.
    if (document.getElementById('J_LoginBox').className.indexOf('loading') < 0) {

        if (isSafeLogin) {
            // Disable safe login option.
            safeLoginCheckbox.click();
        } else {
            // Input info and login.
            checkSafeLoginStatusInt = window.clearInterval(checkSafeLoginStatusInt);
            document.getElementById('TPL_username_1').value = settings.username;
            document.getElementById('TPL_password_1').value = settings.password;
            document.getElementById('J_SubmitStatic').click();
        }
    }
}

// Alipay login via Taobao.
document.getElementsByClassName('aliLogin-icon-taobao')[0].click();
document.getElementsByClassName('auth-taobaoMember')[0].click();
    
