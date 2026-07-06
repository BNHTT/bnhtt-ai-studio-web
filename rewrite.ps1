$content = Get-Content 'C:\Users\admin\Desktop\framer\page.html' -Raw

# 1. Replace framer JS/asset URLs (sites subdomain)
# Pattern: https://framerusercontent.com/sites/6TeIiydilG2jtBO60yKATq/xxx.mjs -> assets/js/framerusercontent.com_sites_6TeIiydilG2jtBO60yKATq_xxx.mjs
$content = $content -replace 'https://framerusercontent\.com/sites/6TeIiydilG2jtBO60yKATq/([^"''\s<>?]+)','assets/js/framerusercontent.com_sites_6TeIiydilG2jtBO60yKATq_$1'

# 2. Replace image URLs
# Pattern: https://framerusercontent.com/images/xxx.png -> assets/images/framerusercontent.com_images_xxx.png
$content = $content -replace 'https://framerusercontent\.com/images/([^"''\s<>?]+)','assets/images/framerusercontent.com_images_$1'

# 3. Replace asset fonts (framerusercontent.com/assets/)
$content = $content -replace 'https://framerusercontent\.com/assets/([^"''\s<>?]+)','assets/fonts/framerusercontent.com_assets_$1'

# 4. Replace third-party assets from fontshare
$content = $content -replace 'https://framerusercontent\.com/third-party-assets/([^"''\s<>?]+)','assets/fonts/framerusercontent.com_third-party-assets_$1'

# 5. Replace fonts.gstatic.com URLs
$content = $content -replace 'https://fonts\.gstatic\.com/([^"''\s<>?]+)','assets/fonts/fonts.gstatic.com_$1'

# 6. Replace Google Fonts CSS URL
$content = $content -replace 'https://fonts\.googleapis\.com/([^"''\s<>?]+)','assets/css/fonts.googleapis.com_$1'

# 7. Replace favicon/apple-touch-icon URLs (already covered by images pattern above)

# 8. Handle the scripts from frameship-backend and events.framer.com - keep as-is (external)
# (they won't work offline anyway)

$content | Set-Content 'C:\Users\admin\Desktop\framer\page.html' -NoNewline

Write-Host "Rewriting complete!"
