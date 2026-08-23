from pathlib import Path
from PIL import Image

source_dir = Path('/home/ubuntu/webdev-static-assets/chi-zaram')
assets = [
    ('chi-zaram-homepage-sharp.png', 'chi-zaram-homepage-sharp.webp'),
    ('chi-zaram-story-values-sharp.png', 'chi-zaram-story-values-sharp.webp'),
    ('chi-zaram-product-catalogue-sharp.png', 'chi-zaram-product-catalogue-sharp.webp'),
]

for source_name, target_name in assets:
    source = source_dir / source_name
    target = source_dir / target_name
    with Image.open(source) as image:
        image.convert('RGB').save(target, 'WEBP', quality=84, method=6)
        print(f'{source_name} -> {target_name}: {image.size}, {target.stat().st_size} bytes')
