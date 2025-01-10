document.addEventListener('DOMContentLoaded', function() {
    const userList = ["黃美玲", "李靜汝", "田慧晶", "江佳容", "林怡彣", "李立德", "李雯琪", "張心怡", "洪錦男", "許志豪", "林明輝", "林淑楨", "林秀貞", "黃綉媛", "王耀賢", "莊雅如", "陳怡妏", "陳育德", "蕭慧純", "李蕎至", "蔡呈熙", "李宜芳", "鄧伊芳", "曾柏蓉", "魏俊益", "崔愉雯", "徐錫穎", "張茱貽", "張智鈞", "洪振民", "蔡怡君", "林佳蓉", "張瀞云", "陳立崗", "徐嘉禧", "楊海萍", "鍾菁菁", "吳政翰", "林明德", "許淑智", "唐瑄", "曾怡儒", "張麗娟", "蘇琮筆", "Kristine Can"];

    // 初始化週次選項
    const weekSelect = document.getElementById('week-select');
    for (let i = 1; i <= 52; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = `第 ${i} 週`;
        weekSelect.appendChild(option);
    }

    // 設定初始週次為當前週
    const today = new Date();
    const currentWeek = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    weekSelect.value = currentWeek;

    // 管理者登入功能
    document.getElementById('admin-login').addEventListener('click', function() {
        const username = prompt('請輸入帳號');
        const password = prompt('請輸入密碼');
        if (username === '114' && password === '114') {
            alert('登入成功！');
            // 進入管理模式，允許修改借用人
        } else {
            alert('帳號或密碼錯誤');
        }
    });

    // 其他功能如切換週次、填充課表等可根據需求補充
});
