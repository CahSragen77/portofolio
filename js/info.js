 /**
         * ============================================
         * 1. JAM DIGITAL
         * ============================================
         */
        function updateClock() {
            const now = new Date();
            const optionsDate = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const dateStr = now.toLocaleDateString('id-ID', optionsDate);
            const optionsTime = {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeStr = now.toLocaleTimeString('id-ID', optionsTime);

            const clockElement = document.getElementById('clockDisplay');
            if (clockElement) {
                clockElement.textContent = '⏱ ' + dateStr + ' — ' + timeStr;
            }
        }

        updateClock();
        setInterval(updateClock, 1000);

        /**
         * ============================================
         * 2. FUNGSI CETAK / PDF
         * ============================================
         */
        function cetakHalaman() {
            window.print();
        }

        /**
         * ============================================
         * 3. LOG KONSOLE
         * ============================================
         */
        console.log('%c✅ CV Yudi Dwiranto - Siap!', 'font-size:16px; font-weight:bold; color:#2d6a4f;');
        console.log('%c📌 3 Pesan Utama: Admin | Digital | Excel', 'font-size:14px; color:#0a2647;');
        console.log('🤖 Mentor: Gemini · ChatGPT · DeepSeek');