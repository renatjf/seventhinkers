<?php $files = glob("img/eventos/resize/*.jpg"); for ($i=1; $i<count($files); $i++) { $num = $files[$i]; echo '<a class="links-eventos" title="Eventos" href="'.$num.'" rel="shadowbox[galeriaMenu]"></a>'; } ?>

<?php $files = glob("img/eventos/resize/*.jpg"); for ($i=1; $i<count($files); $i++) { $num = $files[$i]; echo '<a class="links-eventos" title="Eventos" href="'.$num.'" rel="shadowbox[galeriaMobile]"></a>'; } ?>



