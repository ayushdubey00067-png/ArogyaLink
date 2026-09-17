export default function YogaMedicinePage() {
  return (
    <>
      <title>Yoga & Medicine Suggester — ArogyaLink</title>
      <meta
        name="description"
        content="Smart symptom checker with Ayurvedic remedies and personalized yoga recommendation plans — powered by ArogyaLink."
      />
      <div className="w-full" style={{ height: 'calc(100vh - 64px)' }}>
        <iframe
          src={`${import.meta.env.BASE_URL}yoga-tool/index.html`}
          title="Yoga & Medicine Suggester"
          className="w-full h-full border-0"
          style={{ minHeight: '100vh' }}
        />
      </div>
    </>
  );
}
