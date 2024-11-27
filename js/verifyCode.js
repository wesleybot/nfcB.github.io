let generatedCode; // 儲存生成的解鎖代碼

        function generateCode() {
            // 生成 6 位隨機數字
            generatedCode = Math.floor(100000 + Math.random() * 900000);
            document.getElementById('codeDisplay').innerText = `您的解鎖代碼是：${generatedCode}`;
            // 顯示繼續按鈕
            document.getElementById('continueButton').classList.remove('hidden');
        }

        function goToVerify() {
            // 隱藏生成代碼區域，顯示驗證代碼區域
            document.getElementById('generateSection').classList.add('hidden');
            document.getElementById('verifySection').classList.remove('hidden');
        }

        function verifyCode() {
            // 獲取用戶輸入的代碼
            const inputCode = document.getElementById('inputCode').value;
            // 驗證代碼是否正確
            if (inputCode == generatedCode) {
                document.getElementById('result').innerText = "解鎖成功！";
                document.getElementById('result').style.color = "green";
                // 此處可添加解鎖硬件的邏輯
            } else {
                document.getElementById('result').innerText = "代碼錯誤，請重試。";
                document.getElementById('result').style.color = "red";
            }
        }