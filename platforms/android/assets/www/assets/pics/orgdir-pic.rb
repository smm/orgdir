require 'rubygems'
require 'json'

people = JSON.parse(File.read('json-file'))
people.each { |person| 
	system("wget http://lorempixel.com/160/160")
	newPicFileName = person['firstName'] + "_" + person['lastName'] + ".jpg"
	newPicFileName50 = person['firstName'] + "_" + person['lastName'] + "50.jpg"
	system("mv 160 #{newPicFileName}")
	system("cp #{newPicFileName} #{newPicFileName50}; sips -Z 50 #{newPicFileName50}")
}
