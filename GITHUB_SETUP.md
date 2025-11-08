# GitHub Setup Instructions

## Quick Setup (If Git is Installed)

1. **Run the PowerShell script:**
   ```powershell
   .\push-to-github.ps1
   ```

## Manual Setup

If the script doesn't work or you prefer manual setup, follow these steps:

### Step 1: Install Git (If Not Already Installed)

**Option A: Install Git for Windows**
- Download from: https://git-scm.com/download/win
- Install with default settings
- Restart your terminal after installation

**Option B: Install GitHub Desktop**
- Download from: https://desktop.github.com/
- Easier GUI-based Git management
- Automatically handles authentication

### Step 2: Initialize Git Repository

Open PowerShell or Command Prompt in your project folder and run:

```bash
git init
```

### Step 3: Add Remote Repository

```bash
git remote add origin https://github.com/DinzMan/my-portfolio.git
```

If the remote already exists, update it:
```bash
git remote set-url origin https://github.com/DinzMan/my-portfolio.git
```

### Step 4: Add All Files

```bash
git add .
```

### Step 5: Commit Changes

```bash
git commit -m "Initial commit: Portfolio website with React, Tailwind CSS, and EmailJS integration"
```

### Step 6: Push to GitHub

```bash
git push -u origin main
```

**Note:** If you get an error about the branch name, try:
```bash
git push -u origin master
```

Then rename the branch on GitHub to `main` if needed.

## Authentication

GitHub no longer accepts passwords for Git operations. You have two options:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub.com and sign in
2. Click your profile picture > **Settings**
3. Go to **Developer settings** > **Personal access tokens** > **Tokens (classic)**
4. Click **Generate new token (classic)**
5. Give it a name (e.g., "Portfolio Push")
6. Select the **repo** scope
7. Click **Generate token**
8. **Copy the token** (you won't see it again!)
9. When Git asks for a password, use the token instead

### Option 2: GitHub Desktop

1. Install GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add your repository
4. Commit and push through the GUI

### Option 3: SSH Keys (Advanced)

1. Generate an SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add the SSH key to your GitHub account
3. Change the remote URL to use SSH:
   ```bash
   git remote set-url origin git@github.com:DinzMan/my-portfolio.git
   ```

## Troubleshooting

### "Repository not found" Error
- Make sure the repository exists at: https://github.com/DinzMan/my-portfolio
- Check that you have write access to the repository

### "Authentication failed" Error
- Make sure you're using a Personal Access Token, not your password
- Check that the token has the `repo` scope

### "Branch 'main' does not exist" Error
- Create the branch on GitHub first, or
- Push to `master` instead and rename it later

### "Permission denied" Error
- Make sure you're logged into the correct GitHub account
- Verify you have write access to the repository

## After Pushing

Once your code is pushed to GitHub, you can:

1. **View your repository:** https://github.com/DinzMan/my-portfolio
2. **Set up GitHub Pages** for free hosting:
   - Go to repository Settings > Pages
   - Select source branch (main)
   - Your site will be available at: `https://dinzman.github.io/my-portfolio`

3. **Deploy to other platforms:**
   - Netlify: https://www.netlify.com/
   - Vercel: https://vercel.com/
   - Both offer free hosting for React apps

## Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Make sure Git is properly installed
3. Verify your GitHub credentials
4. Check that the repository exists and you have access

