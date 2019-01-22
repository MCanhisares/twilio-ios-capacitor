
  Pod::Spec.new do |s|
    s.name = 'TwilioIosCapacitor'
    s.version = '0.0.1'
    s.summary = 'This plugin is used to make video calls using Twilio's video platform on iOS'
    s.license = 'MIT'
    s.homepage = 'https://github.com/MCanhisares/twilio-ios-capacitor'
    s.author = 'MCanhisares'
    s.source = { :git => 'https://github.com/MCanhisares/twilio-ios-capacitor', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end