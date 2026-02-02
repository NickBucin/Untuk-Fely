<script>
window.addEventListener("load", () => {
  const music = document.getElementById("bgm");

  // pastikan autoplay jalan
  music.play().catch(() => {});

  // unmute setelah halaman siap
  setTimeout(() => {
    music.muted = false;
  }, 500);
});

// fallback: kalau browser tetap ngeyel
document.addEventListener("click", function startMusic() {
  const music = document.getElementById("bgm");
  music.muted = false;
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
});
</script>
