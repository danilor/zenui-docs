export default function Scroll(id: string) {
  const d = document.getElementById(id);
  if (d) {
    d.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
