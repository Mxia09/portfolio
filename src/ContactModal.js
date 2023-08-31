export default function ContactModal({ visible, onClose }) {
  const handleOnClose = (e) => {
      if (e.target.id === 'container') {
          onClose();
      }
  };

  if (!visible) return null;


  return (
      <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="p-2 rounded">
              <div className="flex items-center justify-center p-12">
                  <div className="mx-auto w-full max-w-[550px]">
                      <div className="flex items-center min-h-screen ">
                          <div className="container mx-auto">
                              <div className="max-w-md mx-auto my-10 bg-gray-700 dark:bg-zinc-900 p-5 rounded-md shadow-sm">
                                  <div className="text-center">
                                      <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200 font-lacquer">Let's get in touch</h1>
                                  </div>
                                  <div className="m-7">
                                      <form action="https://getform.io/f/71c15033-e394-4567-b7ae-df905ca950ac" method="POST">
                                          <input type="checkbox" name="botcheck" id="botcheck" style={{ display: 'none' }} />
                                  <div className="mb-6">
                                      <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                      <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                  </div>
                                  <div className="mb-6">
                                      <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                      <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                  </div>
                                  <div className="mb-6">

                                      <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                      <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                  </div>
                                  <div className="mb-6">
                                      <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                      <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                  </div>
                                  <p className="text-base text-center text-gray-400" id="result">
                                  </p>                                         
                                          <div className="mb-6">
                                              <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                                          </div>
                                          <p className="text-base text-center text-gray-400" id="result"></p>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}