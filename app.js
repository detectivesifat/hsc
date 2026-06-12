// Switch between PDFs and Video tab panel
function switchTab(panelId, btn) {
    // Deactivate all tab buttons and panels
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active-panel'));
    
    // Activate clicked tab button
    btn.classList.add('active');
    
    // Show targeted panel
    document.getElementById(panelId).classList.add('active-panel');
    
    // Re-trigger search filter in the new panel
    filterResources();
}

// Toggle visibility of main subject card
function toggleCategory(header) {
    const card = header.parentElement;
    card.classList.toggle('expanded');
}

// Toggle visibility of nested subcategory blocks
function toggleSubcategory(subHeader) {
    const block = subHeader.parentElement;
    block.classList.toggle('sub-expanded');
}

// Real-time search filter covering both tabs
function filterResources() {
    const term = document.getElementById('searchInput').value.trim().toLowerCase();
    const alertBox = document.getElementById('searchResultsAlert');
    
    let totalPdfMatches = 0;
    let totalClassMatches = 0;
    
    // 1. Process PDFs Tab Panel
    const pdfPanel = document.getElementById('pdfPanel');
    const pdfCards = pdfPanel.querySelectorAll('.category-card');
    
    pdfCards.forEach(card => {
        let cardHasMatch = false;
        const rows = card.querySelectorAll('.link-row');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const isMatch = text.includes(term);
            if (isMatch) {
                row.style.display = 'flex';
                cardHasMatch = true;
                totalPdfMatches++;
            } else {
                row.style.display = 'none';
            }
        });

        // Check matches in subcategory headers too
        const subBlocks = card.querySelectorAll('.subcategory-block');
        subBlocks.forEach(block => {
            let subHasMatch = false;
            const subRows = block.querySelectorAll('.link-row');
            subRows.forEach(r => {
                if (r.style.display === 'flex') { subHasMatch = true; }
            });
            
            if (subHasMatch) {
                block.style.display = 'block';
                if (term) { block.classList.add('sub-expanded'); }
            } else {
                block.style.display = 'none';
            }
        });

        if (cardHasMatch) {
            card.style.display = 'block';
            if (term) { card.classList.add('expanded'); }
            // Update category count pills dynamically
            const visibleRows = Array.from(rows).filter(r => r.style.display === 'flex').length;
            card.querySelector('.count-pill').textContent = visibleRows + " matching";
        } else {
            card.style.display = 'none';
        }
    });

    // 2. Process Classes Tab Panel
    const classPanel = document.getElementById('classPanel');
    const classCards = classPanel.querySelectorAll('.category-card');
    
    classCards.forEach(card => {
        let cardHasMatch = false;
        const rows = card.querySelectorAll('.link-row');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const isMatch = text.includes(term);
            if (isMatch) {
                row.style.display = 'flex';
                cardHasMatch = true;
                totalClassMatches++;
            } else {
                row.style.display = 'none';
            }
        });

        if (cardHasMatch) {
            card.style.display = 'block';
            if (term) { card.classList.add('expanded'); }
            const visibleRows = Array.from(rows).filter(r => r.style.display === 'flex').length;
            card.querySelector('.count-pill').textContent = visibleRows + " matching";
        } else {
            card.style.display = 'none';
        }
    });

    // 3. Update UI badges with match counts
    if (term) {
        document.getElementById('pdfTabBadge').textContent = totalPdfMatches;
        document.getElementById('classTabBadge').textContent = totalClassMatches;
        
        alertBox.style.display = 'block';
        alertBox.textContent = `🔍 সার্চ ফলাফল: পিডিএফ ফোল্ডারে ${totalPdfMatches} টি এবং ক্লাসের ফোল্ডারে ${totalClassMatches} টি লিংক পাওয়া গেছে।`;
    } else {
        // Restore original counts dynamically
        document.getElementById('pdfTabBadge').textContent = originalPdfCount;
        document.getElementById('classTabBadge').textContent = originalClassCount;
        alertBox.style.display = 'none';
        
        // Reset counts in cards
        pdfCards.forEach(card => {
            const originalCount = card.querySelectorAll('.link-row').length;
            card.querySelector('.count-pill').textContent = originalCount + " files";
            card.style.display = 'block';
        });
        classCards.forEach(card => {
            const originalCount = card.querySelectorAll('.link-row').length;
            card.querySelector('.count-pill').textContent = originalCount + " courses";
            card.style.display = 'block';
        });
        
        // Reset collapsed states except default ones
        document.querySelectorAll('.category-card').forEach((card, idx) => {
            if (idx !== 0) { card.classList.remove('expanded'); }
        });
        document.querySelectorAll('.subcategory-block').forEach((block, idx) => {
            if (idx !== 0) { block.classList.remove('sub-expanded'); }
        });
    }
}

// Track original counts dynamically
let originalPdfCount = 0;
let originalClassCount = 0;

// On document load: calculate counts dynamically and expand first category in PDFs by default
document.addEventListener('DOMContentLoaded', () => {
    // 1. Calculate dynamic counts for PDFs
    const pdfPanel = document.getElementById('pdfPanel');
    const pdfCards = pdfPanel.querySelectorAll('.category-card');
    originalPdfCount = pdfPanel.querySelectorAll('.link-row').length;
    
    pdfCards.forEach(card => {
        const count = card.querySelectorAll('.link-row').length;
        const pill = card.querySelector('.count-pill');
        if (pill) pill.textContent = count + " files";
    });

    // 2. Calculate dynamic counts for Classes
    const classPanel = document.getElementById('classPanel');
    const classCards = classPanel.querySelectorAll('.category-card');
    originalClassCount = classPanel.querySelectorAll('.link-row').length;

    classCards.forEach(card => {
        const count = card.querySelectorAll('.link-row').length;
        const pill = card.querySelector('.count-pill');
        if (pill) pill.textContent = count + " courses";
    });

    // 3. Update top-level Stats & Badges
    document.getElementById('totalPdfCount').textContent = originalPdfCount;
    document.getElementById('totalClassCount').textContent = originalClassCount;
    document.getElementById('pdfTabBadge').textContent = originalPdfCount;
    document.getElementById('classTabBadge').textContent = originalClassCount;

    // 4. Default expand first card
    const firstPdfCard = pdfCards[0];
    if (firstPdfCard) {
        firstPdfCard.classList.add('expanded');
    }
});
