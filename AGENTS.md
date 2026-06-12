# AGENTS.md - Project Memory

## Project Overview
**Project Name:** voyanok_jinish (HSC Resource Organizer)
**Purpose:** Extract, categorize, and organize educational resources from Telegram chat exports into a user-friendly HTML interface.

## Directory Structure
```
voyanok_jinish/
├── ChatExport_2026-06-11/          # "HSC 2026 (Class, Course, Books, Notes, Practical)" channel
│   ├── messages.html               # Contains HSC 2026 resources, courses, marked books, test papers
│   ├── css/
│   ├── images/
│   ├── js/
│   └── stickers/
├── ChatExport_2026-06-11 (1)/      # "PDF Library - ARC" (IQ Gamer PDF Store) channel
│   ├── messages.html               # Page 1 - Question banks, dental, GK books
│   ├── messages2.html              # Page 2 - GK prep books, Retina coaching notes
│   ├── messages3.html              # Page 3 - Edge course, IELTS, DU prep, notes
│   ├── messages4.html through messages9.html
│   ├── css/
│   ├── images/
│   ├── js/
│   └── stickers/
├── HSC_Resources/                  # OUTPUT: Organized HTML interface (v4 - Split Files)
│   ├── index.html                  # Main HTML structure & all resource links (~196 KB, 2183 lines)
│   ├── styles.css                  # External dark mode stylesheet (611 lines, 13.7 KB)
│   └── app.js                      # External JS: tab switching, search, dynamic counters (190 lines)
└── AGENTS.md                       # This file - project memory
```

## Data Sources & Content

### Channel 1: HSC 2026 (Class, Course, Books, Notes, Practical)
- **ACS YouTube Playlists** - Cycles 1-6 for Physics, Chemistry, Math, Biology
- **ACS Compact Books** - Physics, Chemistry, Biology, Higher Math (1st & 2nd Paper PDFs)
- **MD Academic Channel** - Courses, notes, practice sheets
- **Main Books PDFs** - Google Drive links for all science subjects
- **HSC Test Papers by SAYEM** - Subject-wise test papers (Bangla, Chemistry, Biology)
- **Marked Books (Rajib Vai)** - Chapter-wise Biology marked notes via RCExam CDN
- **Royal Guide HSC-26** - PDF resources for all subjects via IQGamer_PDFStore
- **HSC BATCH 2026** - Final revision batch, course bundles

### Channel 2: PDF Library - ARC (IQ Gamer PDF Store)
- **University Question Banks** - DU, SUST, JNU, IU, CU (A Unit, D Unit)
- **Physics** - Formulas, Joykoli, Dental Aid books
- **Chemistry** - Retina coaching notes (Qualitative, Organic, Quantitative, Lab)
- **Biology** - Botany, Zoology notes
- **English** - Apex English, Full Book 2020
- **GK & Current Affairs** - Jobayer GK, Corona info, Current Affairs
- **Medical/Dental** - Dental Aid books (C1, C2, Phy1, Phy2), IQ Summit, BSC Nursing
- **IELTS** - Essay Challenge, Writing Forecast, Synonyms, Writing Task 1
- **DU Admission Prep** - Model test papers (Omeca, Udvash, Bigganbidda, UCC, AAPathshala), Answer Sheet, OMR
- **Edge Course Lecture Sheets** - Bangla, ICT, Physics, Chemistry, Math
- **IELTS Resources** - Writing, Synonyms
- **Misc** - Spoken English (Munzereen Shahid), Graphic Design, 1971 Liberation War

## Link Types Found
1. **YouTube Playlists** - youtube.com/playlist?list=...
2. **Telegram Channels/Groups** - t.me/... and t.me/+... (invite links)
3. **Telegram Posts** - t.me/channel/message_id
4. **Google Drive Folders** - drive.google.com/drive/folders/...
5. **Google Drive Files** - drive.google.com/file/d/...
6. **RCExam CDN PDFs** - rcexam.sgp1.cdn.digitaloceanspaces.com/...
7. **Google Forms** - forms.gle/...
8. **Short URLs** - bit.ly/..., rokshort.com/...
9. **Files in folder** - PDF files attached directly in Telegram messages (no external URL)

## Categories Used in index.html

### Tab 1: PDFs & Books (📚 পিডিএফ ও বইপত্র - Default Tab)
1. **Physics (পদার্থবিজ্ঞান)** - Board books, Panjeree test papers, formulas, royal guides
2. **Chemistry (রসায়ন)** - Board books, Panjeree test papers, Retina coaching notes, royal guides
3. **Higher Mathematics (উচ্চতর গণিত)** - Board books, Panjeree test papers, hand notes, Ketab Uddin & Akkharpatra solutions, royal guides
4. **Biology (জীববিজ্ঞান)** - Board books, Panjeree test papers, marked books (Rajib Vai - 24 chapters), notes
5. **Bangla (বাংলা)** - 1st paper (গদ্য, কবিতা, নাটক, উপন্যাস, MCQ), 2nd paper (ব্যাকরণ ১-৬, নির্মিতি ৭-১২), Edge notes
6. **English (ইংরেজি)** - Apex, Udvash guides, Panjeree test folders
7. **ICT (তথ্য ও যোগাযোগ প্রযুক্তি)** - Royal guide, Panjeree test papers, Edge notes
8. **University Admission (ভর্তি প্রস্তুতি)** - Question banks, DU model tests, OMRs, written prep
9. **Medical & Dental (মেডিকেল ও ডেন্টাল)** - Dental aid books, nursing, IQ Summit
10. **GK & Current Affairs (সাধারণ জ্ঞান)** - GK-01 to GK-04 series, current affairs, Jobayer GK
11. **IELTS & Spoken English (আইইএলটিএস)** - Essay challenges, synonyms, Munzereen Spoken English
12. **Coaching Materials (কোচিং শিট ও হ্যান্ডনোট)** - Retina exam papers, master collection notes
13. **Miscellaneous (বিবিধ)** - Graphic design, 1971 infographics, course bundles

### Tab 2: Video Classes & Courses (🎥 ভিডিও ক্লাস ও কোর্স)
1. **Physics (পদার্থবিজ্ঞান)** - ACS cycles, CPS, Do or Die, POS, BP, FRC, FRB
2. **Chemistry (রসায়ন)** - ACS cycles, Mottasin cycles, BP, Saikat Organic, FRC, FRB
3. **Higher Mathematics (উচ্চতর গণিত)** - ACS cycles, BP, FRC, FRB, Ashik ONE SHOT
4. **Biology (জীববিজ্ঞান)** - ACS cycles, Battles of Biology, DMC Station, FRC, FRB
5. **Bangla (বাংলা)** - Udvash, FT EBI, BP Banglabuzz, FRC, FRB
6. **English (ইংরেজি)** - Udvash, FT EBI, BP Winner, Pavel batch, FRC, FRB
7. **ICT (তথ্য ও যোগাযোগ প্রযুক্তি)** - ACS Decoder, FT EBI, BP ICT Master, Utkarsh, FRC, FRB
8. **Revision & Bots (রিভিশন ও বট)** - Sciencesense bot, MD Academic discussion groups

### Common Footer Section: Useful Telegram Channels & Groups
- Admission Warriors, PDF Library - ARC, GK World, AR Comrade, Border Cross Mobile

## Technical Notes
- **No Python/Node.js available** on this Windows system
- **Available tools:** Git Bash (C:\msys64\ucrt64\bin), npm (C:\Users\Aluvorta\AppData\Roaming\npm)
- **Shell:** PowerShell / cmd.exe
- **Platform:** win32

## User Preferences
- Wants clickable, user-friendly interface
- Organize similar topics together
- Categories and subcategories
- New folder for organized output
- All links must be clickable
- **Show PDFs first, then Video Classes**
- **Dark mode** premium design
- **Compact containers** (max-width: 900px)
- **Separate files** — HTML, CSS, JS must be in separate files (not all-in-one)

## Project Status
**Status:** COMPLETE (v4)
**Date Created:** 2026-06-11
**Last Updated:** 2026-06-12

### Completed Tasks
1. ✅ Extracted all links from both Telegram chat exports
2. ✅ Reorganized resource base into two distinct tab panels (PDFs vs. Classes)
3. ✅ Integrated all 50+ Panjeree Test Paper PDF links (chapter-wise & subject-wise)
4. ✅ Integrated all 80+ course playlist links from MD Academic Ultimate Playlist
5. ✅ Integrated all missing solution books: **Joykoli Physics Bicitra**, **Ketab Uddin Math Solutions (1st & 2nd Paper)**, **Akkharpatra Math Solutions (1st Paper)**, and **Physics textbook exercise solutions** (11 chapters)
6. ✅ Added all Bangla 1st paper links: গদ্য, কবিতা, নাটক, উপন্যাস, MCQ (Drive links)
7. ✅ Added all Bangla 2nd paper links: ব্যাকরণ ১-৬ (উচ্চারণ, বানান, শব্দশ্রেণি, উপসর্গ ও সমাস, বাক্যতত্ত্ব, অপপ্রয়োগ), নির্মিতি ৭-১২ (পারিভাষিক শব্দ, দিনলিপি, চিঠি, সারাংশ, সংলাপ, প্রবন্ধ)
8. ✅ Added 24 Biology marked book chapters for Rajib Vai (both 1st & 2nd paper, via RCExam CDN)
9. ✅ Implemented dynamic search that queries both active and hidden tabs in real-time
10. ✅ Implemented dynamic count badge system (DOM-based, no hardcoding)
11. ✅ Added color-coded badges: YouTube (red), Telegram (blue), Drive (green), PDF (amber), Form (purple), Bot (pink)
12. ✅ Mobile responsive design with collapsible accordion categories and nested subcategories
13. ✅ All links open in new tabs
14. ✅ **Separated inline styles and scripts into external files** (v4 refactor):
    - `styles.css` — 611 lines, 13.7 KB, full dark mode theme
    - `app.js` — 190 lines, tab switching + search + dynamic counter logic
    - `index.html` — clean HTML only, links to external CSS & JS via `<link>` and `<script src defer>`
15. ✅ Fixed bug: `📖 সমাধান বই (কেতাব উদ্দিন ও অক্ষরপত্র)` correctly placed in PDFs tab (not Video tab)
16. ✅ Applied compact dark mode theme (`#090d16` background, `#111827` card-bg, `max-width: 900px`)

### v4 Architecture (Current)
- **3 separate files** replace the previous monolithic single-file approach
- `index.html` contains only semantic HTML — no `<style>` or `<script>` blocks inline
- `styles.css` loaded via `<link rel="stylesheet" href="styles.css">` in `<head>`
- `app.js` loaded via `<script src="app.js" defer></script>` before `</body>`
- All JS functions (`switchTab`, `toggleCategory`, `toggleSubcategory`, `filterResources`) are global in `app.js`
- Dynamic count initialization runs on `DOMContentLoaded` — no hardcoded numbers anywhere

### Output Files
| File | Size | Lines | Purpose |
|------|------|-------|---------|
| `HSC_Resources/index.html` | ~196 KB | 2183 | All HTML structure and resource links |
| `HSC_Resources/styles.css` | 13.7 KB | 611 | Premium dark mode CSS, responsive design |
| `HSC_Resources/app.js` | 7.4 KB | 190 | Tab switching, search, dynamic counters |

### How to Use
1. Open `HSC_Resources/index.html` in any browser (double-click)
2. Select between the **পিডিএফ ও বইপত্র (PDFs & Books)** and **ভিডিও ক্লাস ও কোর্স (Video Classes & Courses)** tabs
3. Click category headers to expand/collapse subjects
4. Inside PDFs tab, expand subcategory headers (e.g. Test Papers) to see documents
5. Use the search box to dynamically filter links across both tabs (automatically expands matching sections)
6. Click any link to open the resource in a new tab

### Known Limitations
- Telegram `t.me/IQGamer_PDFStore` links without message IDs point to the channel root (user must search manually for those files — these are files posted directly in Telegram with no external URL)
- All 3 output files must remain in the same directory (`HSC_Resources/`) for CSS and JS to load correctly
