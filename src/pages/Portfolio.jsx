const Portfolio = () => (
  <div className="bg-light dark:bg-dark-primary text-dark dark:text-dark-text min-h-screen py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl font-heading text-center mb-8">My Portfolio</h1>

      {/* HEM Automotive Project */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading mb-4">HEM Automotive</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/path-to-hem-automotive-screenshot.png"
            alt="HEM Automotive Project"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg">
              HEM Automotive is a comprehensive automotive repair and service
              platform, designed with a focus on user experience, security, and
              scalability. It features a fully functional backend API integrated
              with a frontend built on modern web technologies, and it offers
              various services like user management, vehicle diagnostics, and
              real-time data updates.
            </p>
            <p className="mt-4">
              <a
                href="https://hemautomotive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-accent hover:underline"
              >
                Visit HEM Automotive
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Stormy Meadowlark Project */}
      <div>
        <h2 className="text-3xl font-heading mb-4">Stormy Meadowlark</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/path-to-stormy-meadowlark-screenshot.png"
            alt="Stormy Meadowlark Website"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
          />
          <div className="md:w-1/2">
            <p className="text-lg">
              Stormy Meadowlark is my personal brand and portfolio site,
              showcasing the various web and API development projects I've
              completed. The site reflects my expertise in creating visually
              appealing, functional, and responsive digital experiences that
              align with client goals.
            </p>
            <p className="mt-4">
              <a
                href="https://stormymeadowlark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-accent hover:underline"
              >
                Visit Stormy Meadowlark
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
