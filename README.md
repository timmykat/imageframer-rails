# Imageframer::Rails

This gem adds a jquery plugin for creating picture frames around images. Perfect for online photo galleries.

## Installation

Add this line to your application's Gemfile:

    gem 'imageframer-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install imageframer-rails

## Usage

In your jQuery code, for images you wish to display with a picture frame, call $('img').frameIt(). (Must be an image element)
You can set the following options:
  Frame color and frame width (pixels):
      frameColor: (hex string)
      frameWidth: (integer number of pixels)
  Matte color and matte width (vertical and horizontal, in percentage of image width (add %) or pixels (add px)
      matteColor: (hex string
      matteBorder:
        x: (string with percentage of image width or pixels)
        y: (string with percentage of image height or pixels)
  Internal matte color and width (pixels). This is what shows next to the image when you use a 45 degree matte cutter.
      innerColor: (hex string),
      innerWidth: (integer number of pixels)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
