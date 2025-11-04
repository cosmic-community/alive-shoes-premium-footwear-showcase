export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alive Shoes</h3>
            <p className="text-gray-400">
              Premium footwear for every lifestyle. Quality, comfort, and style in every step.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>All Products</li>
              <li>Running Shoes</li>
              <li>Casual Sneakers</li>
              <li>Athletic Trainers</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Size Guide</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alive Shoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}