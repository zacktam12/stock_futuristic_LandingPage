import { Button } from "react-day-picker";

{
  /* CTA Section */
}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/40 dark:to-purple-900/40 rounded-2xl p-10 border border-blue-200/50 dark:border-white/10 backdrop-blur-sm shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
          Ready to Transform Your Inventory Management?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that have streamlined their operations
          with our next-generation stock management system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>;
