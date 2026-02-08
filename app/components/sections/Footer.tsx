const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200/70 dark:border-zinc-700 py-12 text-center text-ink-500 dark:text-zinc-400">
      <p className="text-sm font-medium text-ink-700 dark:text-zinc-300">
        © {currentYear} Oleksandr Tolochko
      </p>
    </footer>
  );
};

export default Footer;
