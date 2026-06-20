# 🍽️ Desi-Vedeshi Cuisine

**A Modern, Colorful, Professional Recipe Website featuring 55+ Vegetarian Recipes from Around the World**

---

## 🌍 About the Project

Desi-Vedeshi Cuisine (where "Desi" means local/native and "Vedeshi" means foreign/international) is a vibrant, fully-featured recipe website that brings together the best vegetarian recipes from 30+ countries across 9 major cuisine categories. 

### ✨ Key Features

- **55+ Authentic Vegetarian Recipes** with detailed ingredients and step-by-step instructions
- **9 Cuisine Categories**: Indian, Italian, Asian, Mexican, Mediterranean, American, African, Middle Eastern, Desserts
- **🥘 Pantry Filter**: Select ingredients you have at home and find recipes you can make!
- **💬 Feedback System**: Star rating and contact form for user engagement
- **🔍 Smart Search**: Search by recipe name, ingredients, or country
- **🎨 Modern Sticker-Style Design** with floating food emojis and gradient themes
- **📱 Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **🎬 Smooth Animations**: Scroll animations, hover effects, page transitions
- **🖨️ Print-Friendly**: Special print styles for recipe cards

---

## 📁 Project Structure

```
desi-vedeshi-cuisine/
├── index.html              # Main HTML file (Homepage)
├── css/
│   └── style.css           # Complete stylesheet (29.5 KB)
├── js/
│   └── main.js             # All JavaScript functionality (29.1 KB)
├── developer/
│   └── branding.css        # Developer branding styles (Easy to customize)
├── images/                 # (Uses Unsplash URLs - no local images needed)
└── recipes/                # (Recipe data is in main.js)
```

---

## 🚀 How to Upload to GitHub & Go Live

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** button in the top right corner → **New repository**
3. Enter repository name: `desi-vedeshi-cuisine`
4. Add description: "A modern recipe website with 55+ vegetarian recipes from around the world"
5. Choose **Public** (or Private if you prefer)
6. **DO NOT** initialize with README (we already have files)
7. Click **Create repository**

### Step 2: Upload Files to GitHub

#### Option A: Using Git Command Line (Recommended)

Open your terminal/command prompt and run:

```bash
# Navigate to the project folder
cd /path/to/desi-vedeshi-cuisine

# Initialize Git repository
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit: Desi-Vedeshi Cuisine website with 55+ recipes"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/desi-vedeshi-cuisine.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Desktop (Easier for Beginners)

1. Download and install [GitHub Desktop](https://desktop.github.com)
2. Open GitHub Desktop
3. Click **File** → **Add local repository**
4. Select your `desi-vedeshi-cuisine` folder
5. Click **Publish repository**
6. Enter repository name and description
7. Click **Publish repository**

#### Option C: Direct Upload on GitHub Website

1. Go to your newly created repository on GitHub
2. Click **Uploading an existing file** link
3. Drag and drop ALL files from the `desi-vedeshi-cuisine` folder
4. Click **Commit changes**

---

### Step 3: Go Live with GitHub Pages (FREE Hosting)

1. Go to your repository on GitHub
2. Click **Settings** tab (at the top)
3. Scroll down to **Pages** section in the left sidebar (or find "GitHub Pages")
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **main** (or **master**)
6. Select folder: **/(root)**
7. Click **Save**
8. Wait 2-5 minutes for deployment
9. Your live URL will appear: `https://YOUR_USERNAME.github.io/desi-vedeshi-cuisine/`

---

### Step 4: Custom Domain (Optional)

If you want a custom domain like `www.yourwebsite.com`:

1. Buy a domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
2. In your GitHub repository, go to **Settings** → **Pages**
3. Under **Custom domain**, enter your domain name
4. Click **Save**
5. Add these DNS records at your domain registrar:
   - **Type A**: `@` → `185.199.108.153`
   - **Type A**: `@` → `185.199.109.153`
   - **Type A**: `@` → `185.199.110.153`
   - **Type A**: `@` → `185.199.111.153`
   - **Type CNAME**: `www` → `YOUR_USERNAME.github.io`
6. Wait for DNS propagation (can take up to 24 hours)

---

## 🎨 Customization Guide (For Reselling)

### Changing Developer Branding

All developer branding is centralized in `developer/branding.css` and the footer section of `index.html`:

1. **Developer Name**: Edit in `index.html` footer section
   - Search for: `𝐆𝐨𝐯𝐢𝐧𝐝 𝐑𝐚𝐦`
   - Replace with your name

2. **Alias/Username**: Edit in `index.html` footer section
   - Search for: `Ꭾɪᴋᴀᴄʜᴜ`
   - Replace with your alias

3. **Website URL**: Edit in `index.html` footer section
   - Search for: `https://VortexTechWarp.com`
   - Replace with your website

4. **Instagram URL**: Edit in `index.html` footer section
   - Search for: `https://www.instagram.com/_._govind_ram_._`
   - Replace with your Instagram link

5. **Social Links**: Edit in `developer/branding.css` and `index.html`

### Changing Colors & Theme

Edit `css/style.css`:
```css
:root {
  --primary: #FF6B6B;    /* Change to your brand color */
  --secondary: #4ECDC4;  /* Change to your accent color */
  --accent: #FFE66D;     /* Change to your highlight color */
}
```

### Adding More Recipes

Edit `js/main.js` and add new recipe objects to the `recipes` array following this format:
```javascript
{
  id: 56,
  title: "Your Recipe Name",
  category: "category-name",
  origin: "🇨🇳 Country",
  time: "30 min",
  difficulty: 2,
  calories: "300 kcal",
  image: "https://image-url.jpg",
  description: "Description...",
  ingredients: ["item1", "item2"],
  steps: ["Step 1", "Step 2"]
}
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations, Custom Properties
- **Vanilla JavaScript** - No frameworks needed, pure JS
- **Google Fonts** - Poppins, Fredoka One, Pacifico
- **Unsplash Images** - High-quality free food photography
- **GitHub Pages** - Free hosting

---

## 📱 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is open source. You are free to use, modify, and sell this project. 
Please maintain attribution to the original developer if using significant portions of the code.

---

## 👨‍💻 Developer

**𝐆𝐨𝐯𝐢𝐧𝐝 𝐑𝐚𝐦** | **Ꭾɪᴋᴀᴄʜᴜ**

- 🌐 Website: [VortexTechWarp.com](https://VortexTechWarp.com)
- 📸 Instagram: [@_._govind_ram_._](https://www.instagram.com/_._govind_ram_._)
- 💻 GitHub: [github.com](https://github.com)

---

## 🎉 Enjoy Your Culinary Journey!

**Happy Cooking! 🍳🌍✨**
