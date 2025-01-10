document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // 简单的验证逻辑
    if (username === 'admin' && password === '123456') {
        message.textContent = '登录成功！';
        message.style.color = '#28a745';
        // 这里可以添加页面跳转或其他操作
    } else {
        message.textContent = '用户名或密码错误';
        message.style.color = '#dc3545';
    }
});
