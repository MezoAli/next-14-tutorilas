const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-2xl">
      <div className="mb-8 mockup-code">
        <pre data-prefix="$">
          <code>npx create-next-app@latest next-js</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
