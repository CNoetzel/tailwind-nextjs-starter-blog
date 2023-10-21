---
title: E-Mail notification of movement
date: '2019-07-12'
tags: ['motion', 'raspberry pi', 'nesting box', 'SSMTP', 'Mpack']
draft: false
summary: This post deals with setting up automatic e-mails as soon as a movement has been detected in the nesting box.
---

## Preface

Especially when the nesting box has been newly hung or when in spring the first visitors come by to inspect possible breeding sites, there is great curiosity who is interested in the nesting box.

Having a live stream is all well and good but you probably can't monitor it around the clock. For this reason we want to be notified next by e-mail when movement is detected in the nest.

The solution is relatively simple. Motion is able to store images in the file system when there is movement. Furthermore is it able to trigger actions that should take place after an image has been taken.

You can take advantage of this and send an email as soon as an image has been saved.

The following explains how the sending of e-mails is set up.

## Steps

### Sending of E-Mails

First, the _ssmtp_ and _mailutils_ packages are installed.

```bash
sudo apt-get install ssmtp mailutils
```

Then a configuration for an e-mail server via which the e-mails should be sent must be stored under `/etc/ssmtp/ssmtp.conf`.

The domain divisionby0.de is registered with Strato, which is why a Strato server is specified as `mailhub`. Any other mail server can also be used for this purpose.

```bash
#
# Config file for sSMTP sendmail
#
root=postmaster
mailhub=smtp.strato.de:587
hostname=hostname-of-the-pi
FromLineOverride=YES
AuthUser=username
AuthPass=password
USESTARTTLS=YES
```

After the configuration has been saved, an initial email can be sent via the Pi. If everything has been configured correctly, you should receive an email.

```bash
echo "Content of the test message..." | mail -s "Test message" emailadress@domain.com
```

### Sending of E-Mails with attachments

To send e-mails with attachments we need the _mpack_ package.

```bash
sudo apt-get install mpack
```

After installation an e-mail can be sent as a test which should reach the recipient with an attachment.
In this case we send a simple text file with no content.

```bash
touch /home/xxx/testfile.txt
mpack -s "Test" /home/xxx/testfile.txt emailadress@domain.com
```

### Dispatch via Motion

The Pi is now able to send emails with attachments. To let Motion do this automatically as soon as a movement is detected, the configuration file under `/etc/motion/motion.conf` must be adapted.

It is important that `output_pictures` is not set to _off_, so that images are saved when a movement is detected.
`On_picture_save` defines what should happen as soon as a picture is saved.

In this case, an e-mail should be sent via mpack and the saved image should be attached to the e-mail using the `%f` parameter.

```bash
# Output 'normal' pictures when motion is detected (default: off)
# Valid values: on, off, first, best, center
output_pictures center

# Command to be executed when a picture (.ppm|.jpg) is saved (default: none)
# To give the filename as an argument to a command append it with %f
on_picture_save mpack -s "Motion in netingbox detected" %f emailadress@domain.com
```

If too many e-mails arrive e.g. because the brids started breeding you can comment out the above line in the configuration.
