export function Experience() {
  return (
    <section id="exp" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">02</div>
          <div className="section-title-block">
            <h2>Experience</h2>
            <p>Building software that serves communities and scales impact</p>
          </div>
        </div>

        <div className="experience-list">
          <div className="experience-card cursor-hover">
            <div className="exp-date">Feb 2026 – Present</div>
            <div className="exp-content">
              <h3>Co-Founder &amp; Software Developer</h3>
              <div className="exp-company">Clarus (HackCanada 2026 Winner) — NSU Startup Cohort</div>
              <ul className="exp-points">
                <li>Selected for the NSU Startup Cohort 2026 to build Clarus into a production healthcare-automation platform, powered by FastAPI, Next.js, React Flow, ElevenLabs, Twilio, and Supabase.</li>
                <li>Won Vivirion Solutions – Best Practical Healthcare Hack and Google – Build with AI at HackCanada 2026.</li>
                <li>Architected a FastAPI rules-based engine that evaluates patient data (age, insurance, lab values) against a decision graph to auto-trigger voice calls, SMS, and referrals with zero clinician review.</li>
                <li>Engineered an ElevenLabs + Twilio outbound call pipeline with webhook-driven status sync.</li>
                <li>Auto-booked Google Calendar appointments upon patient confirmation in real time.</li>
                <li>Built a React Flow drag-and-drop builder for no-code clinical workflow design.</li>
              </ul>
            </div>
          </div>

          <div className="experience-card cursor-hover">
            <div className="exp-date">Jul 2026 – Sep 2026</div>
            <div className="exp-content">
              <h3>Software Engineer Intern</h3>
              <div className="exp-company">Islamic Center of Markham – Masjid Darul Iman — Toronto, ON</div>
              <ul className="exp-points">
                <li>Engineered a tilt-compensated digital compass by fusing accelerometer, gyroscope, and magnetometer data via vector-based orientation math to deliver reliable real-time heading estimates at 60Hz.</li>
                <li>Debugged and resolved a platform-specific accelerometer sign-convention bug and inconsistent magnetic declination timeouts on Android, restoring reliable heading accuracy across devices.</li>
                <li>Added confidence-gated dip-angle filtering to fix heading accuracy at high-latitude locations, then implemented AsyncStorage caching so the app stays reliable without a live network connection.</li>
                <li>Built a live announcements feed on the WordPress REST API, sanitizing HTML and stripping CMS markup so third-party content renders reliably, with pull-to-refresh support.</li>
                <li>Built a content-reader with structured multi-section indexing (114 entries) and persistent read-position tracking, then migrated push notifications to native Expo Notifications to cut vendor dependency.</li>
                <li>Unified visual design across native and WebView-rendered components via injected custom CSS.</li>
              </ul>
            </div>
          </div>

          <div className="experience-card cursor-hover">
            <div className="exp-date">Jul 2025 – Aug 2025</div>
            <div className="exp-content">
              <h3>Software Systems Intern</h3>
              <div className="exp-company">Islamic Center of Markham – Masjid Darul Iman — Toronto, ON</div>
              <ul className="exp-points">
                <li>Developed a community-facing mobile application using React Native (Expo), serving 1,000+ members with real-time announcements and prayer schedules.</li>
                <li>Implemented push notifications with OneSignal and live data syncing via Supabase, enhancing user engagement.</li>
                <li>Built a full-stack Volunteer Scheduling platform with React.js and Supabase, coordinating 250+ volunteers.</li>
                <li>Integrated secure Supabase Auth with PostgreSQL, enabling role-based access and seamless CRUD operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}