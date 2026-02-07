const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200/70 py-12 text-center text-ink-500">
      <p className="text-sm font-medium text-ink-700">
        © {currentYear} Oleksandr Tolochko
      </p>
    </footer>
  );
};

export default Footer;
