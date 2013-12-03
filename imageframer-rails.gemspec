# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'imageframer/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "imageframer-rails"
  spec.version       = Imageframer::Rails::VERSION
  spec.authors       = ["Tim Kinnel"]
  spec.email         = ["tkinnel@gmail.com"]
  spec.description   = %q{jQuery plugin to create picture frames around images}
  spec.summary       = %q{jQuery frames for images}
  spec.homepage      = "http://github.com/timmkat"
  spec.license       = "MIT"

  spec.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE.txt", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_dependency "bundler", "~> 1.3"
  spec.add_dependency "rake"
  spec.add_dependency "railties"
end
